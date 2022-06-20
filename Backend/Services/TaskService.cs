using esercizioBackend.Models;
using esercizioBackend.Models.context;
using Microsoft.EntityFrameworkCore;

namespace esercizioBackend.Services
{
    public class TaskService
    {
        private readonly DatabaseContext _db;
        public TaskService(DatabaseContext db)
        {
            _db = db;
        }

        public List<Attivita> getAllTask()
        {
            using (DatabaseContext dbContext = new DatabaseContext())
            {
                return dbContext.Activities.FromSqlRaw("SELECT * FROM activites WHEN totaleOre > 1").ToList();
            }
        }

        public void insertTask()
        {
            Attivita task = new Attivita()
            {
                id = 1,
                titolo = "Impara Angular",
                descrizione = "impariamo angular",
                stato = "Backlog",
                commento = "",
                oreLavorate = 10,
                totaleOre = 10,
                utenteAssegnato =
                {
                  name = "pippo"
                }
            };
            _db.Activities.Add(task);
            _db.SaveChanges();
        }
    }

}

