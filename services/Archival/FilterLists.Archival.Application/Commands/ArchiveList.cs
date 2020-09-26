﻿using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Threading;
using System.Threading.Tasks;
using FilterLists.Archival.Application.Models;
using FilterLists.Archival.Infrastructure.Clients;
using FilterLists.Archival.Infrastructure.Persistence;
using FilterLists.Directory.Api.Contracts;
using FilterLists.Directory.Api.Contracts.Models;
using MediatR;
using Microsoft.Extensions.Logging;
using File = FilterLists.Archival.Application.Models.File;

namespace FilterLists.Archival.Application.Commands
{
    public static class ArchiveList
    {
        public class Command : IRequest
        {
            public Command(int listId)
            {
                ListId = listId;
            }

            public int ListId { get; }
        }

        public class Handler : IRequestHandler<Command, Unit>
        {
            private readonly IHttpContentClient _client;
            private readonly IDirectoryApi _directory;
            private readonly ILogger _logger;
            private readonly IFileRepository _repo;

            public Handler(
                IHttpContentClient httpContentClient,
                IDirectoryApi directoryApi,
                ILogger<Handler> logger,
                IFileRepository fileRepository)
            {
                _client = httpContentClient;
                _directory = directoryApi;
                _logger = logger;
                _repo = fileRepository;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                _ = request ?? throw new ArgumentNullException(nameof(request));
                _logger.LogInformation("Archiving list {ListId}", request.ListId);

                var segmentUrls = (await GetSegmentUrlsAsync(request.ListId, cancellationToken)).ToList();
                if (segmentUrls.Count > 0)
                {
                    var file = GetFileToArchive(request.ListId, segmentUrls, cancellationToken);
                    await _repo.AddFileAsync(file, cancellationToken);
                    _repo.Commit();

                    _logger.LogInformation(
                        "Archived segment(s) {@SegmentNumbers} of list {ListId}",
                        segmentUrls.Select(s => s.SegmentNumber),
                        request.ListId);
                }
                else
                {
                    _logger.LogWarning("List {ListId} has no URLs to archive", request.ListId);
                }

                return Unit.Value;
            }

            private async Task<IEnumerable<ListDetailsViewUrlVm>> GetSegmentUrlsAsync(
                int listId,
                CancellationToken cancellationToken)
            {
                var listDetails = await _directory.GetListDetailsAsync(listId, cancellationToken);
                return listDetails.ViewUrls?
                           .GroupBy(u => u.SegmentNumber, (_, ue) => ue.OrderBy(u => u.Primariness).First()) ??
                       new List<ListDetailsViewUrlVm>();
            }

            private IFile GetFileToArchive(
                int listId,
                IEnumerable<ListDetailsViewUrlVm> segmentUrls,
                CancellationToken cancellationToken)
            {
                var segmentsAsync = GetSegmentsAsync(segmentUrls, cancellationToken);
                var target = listId.ToString(CultureInfo.InvariantCulture).PadLeft(5, '0');
                return new File(segmentsAsync, target);
            }

            private async IAsyncEnumerable<IFileSegment> GetSegmentsAsync(
                IEnumerable<ListDetailsViewUrlVm> segmentUrls,
                [EnumeratorCancellation] CancellationToken cancellationToken)
            {
                foreach (var segment in segmentUrls)
                {
                    var sourceFileName = Uri.UnescapeDataString(segment.Url.Segments.Last());
                    var sourceExtension = Path.GetExtension(sourceFileName);
                    yield return new FileSegment(
                        sourceExtension,
                        await _client.GetContentAsync(segment.Url, cancellationToken));
                }
            }
        }
    }
}
