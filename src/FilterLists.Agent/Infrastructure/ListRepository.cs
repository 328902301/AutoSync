﻿using System;
using System.IO;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading;
using System.Threading.Tasks;
using FilterLists.Agent.Core.List;
using JetBrains.Annotations;
using Microsoft.Extensions.Logging;

namespace FilterLists.Agent.Infrastructure
{
    [UsedImplicitly]
    public class ListRepository : IListRepository
    {
        private readonly HttpClient _httpClient;
        private readonly ILogger<ListRepository> _logger;

        public ListRepository(HttpClient httpClient, ILogger<ListRepository> logger)
        {
            httpClient.Timeout = TimeSpan.FromSeconds(90);
            var header = new ProductHeaderValue("FilterLists.Agent");
            var userAgent = new ProductInfoHeaderValue(header);
            httpClient.DefaultRequestHeaders.UserAgent.Add(userAgent);
            _httpClient = httpClient;

            _logger = logger;
        }

        public async Task<Stream> GetAsStreamAsync(Uri url, CancellationToken cancellationToken)
        {
            using var response = await _httpClient.GetAsync(url, cancellationToken);
            if (response.IsSuccessStatusCode)
                return await response.Content.ReadAsStreamAsync();
            _logger.LogError($"Error downloading list from {url}. {response.StatusCode}");
            return Stream.Null;
        }
    }
}