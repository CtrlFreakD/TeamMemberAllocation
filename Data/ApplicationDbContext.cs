using Microsoft.EntityFrameworkCore;
using TeamMemberAllocation.Models;

namespace TeamMemberAllocation.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
            
         }
        public DbSet<Team> teams { get; set; }
    }
}
