using esercizioBackend.Models.context;
using Microsoft.EntityFrameworkCore;

namespace esercizioBackend
{
    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<DbContext>();
        }
    }
}
