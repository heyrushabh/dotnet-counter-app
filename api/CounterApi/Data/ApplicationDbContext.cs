using CounterApi.Models;
using Microsoft.EntityFrameworkCore;

namespace CounterApi.Data;

public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(
        DbContextOptions<ApplicationDbContext> options)
        : base(options)
    {
    }

    public DbSet<Counter> Counters => Set<Counter>();
}