using FilterLists.Data.Seed.Extensions;
using Microsoft.EntityFrameworkCore;
using Xunit;

namespace FilterLists.Data.Tests
{
    public class SeedFilterListsDbContextTests
    {
        [Fact]
        public async void SeedOrUpdateAsync_DoesNotThrowException()
        {
            const string connString = "Server=mariadb;Database=filterlists;Uid=filterlists;Pwd=filterlists;";
            var options = new DbContextOptionsBuilder<FilterListsDbContext>()
                          .UseMySql(connString, m => m.MigrationsAssembly("FilterLists.Api"))
                          .Options;
            using (var context = new FilterListsDbContext(options))
            {
                await context.Database.EnsureCreatedAsync();
                await SeedFilterListsDbContext.SeedOrUpdateAsync(context, "../../../data");
            }
        }
    }
}