using Microsoft.EntityFrameworkCore;

namespace WaterProject.API.Data
{
    public class WaterDbContext : DbContext
    {
        public WaterDbContext(DbContextOptions<WaterDbContext> dbContext) : base(dbContext) 
        {
        }

        public DbSet<Project> Projects { get; set; }
    }
}
