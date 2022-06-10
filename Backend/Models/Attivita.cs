namespace esercizioBackend.Models
{
    public class Attivita
    { 
        public int pk { get; set; } = 0;
        public string titolo { get; set; } = "";
        public string descrizione { get; set; } = "";
        public string? utenteAssegnato { get; set; }
        public string stato { get; set; } = "";
        public int totaleOre { get; set; } = 0;
        public int oreLavorate { get; set; } = 0;
        public string commento { get; set; } = "";
    }


    public class dbSimulator
    {

        private static List<Attivita> taskPresenti;
        private static List<User> userPresenti;
        private static int lastPkAssigned;

        static dbSimulator()
        {
            List<Attivita> tasklist = new List<Attivita>()
            {
                new Attivita() { pk = 1, titolo = "Impara Angular", descrizione = "impariamo angular", stato = "Backlog", commento = "", oreLavorate = 10, totaleOre = 10, utenteAssegnato="Alessandro"},
                new Attivita() { pk = 2, titolo = "Impara React", descrizione = "impariamo React", stato = "", commento = "", oreLavorate = 10, totaleOre = 10, utenteAssegnato="Federico"},
                new Attivita() { pk = 3, titolo = "Impara C#", descrizione = "impariamo C#", stato = "", commento = "", oreLavorate = 10, totaleOre = 10, utenteAssegnato = "Filippo"}
            };
            lastPkAssigned = tasklist[tasklist.Count - 1].pk;
            taskPresenti = tasklist;


            List<User> userlist = new List<User>()
            {
                new User() { pk = 1, userName = "Alessandro", password = "1234A" },
                new User() { pk = 2, userName = "Federico", password = "1234F" },
                new User() { pk = 3, userName = "Filippo", password = "1234F" }
            };
            userPresenti = userlist;
        }


        public static List<Attivita> findTaskByUtenteAssegnato(string utente)
        {
           List<Attivita> ret = new List<Attivita>();

            foreach(Attivita task in taskPresenti)
            {
                if(task.utenteAssegnato == utente && task.stato == "inProgress")
                {
                    ret.Add(task);
                }
            }
            return ret;
        }

        public static List<Attivita> GetTaskWithStato(string statoinput)
        {
            taskPresenti.RemoveAll(e => e.stato != statoinput);

            return taskPresenti;
        }

        public static bool UpdateTaskByPk(int pk)
        { 
            return true;
        }

        public static List<User> GetAllUser()
        {
            //List<string> ret =  userPresenti.Select(u => u.userName).ToList();
            //userPresenti.RemoveAll(x => x.password != null);

            return userPresenti;
        }

        public static Attivita nuovoTask( Attivita task)
        {
            lastPkAssigned += 1;
            task.pk = lastPkAssigned;

            taskPresenti.Add(task);

            return task;
        }


        public static List<Attivita> getAllTask()
        {
            return taskPresenti; 
        }

        public static List<Attivita> getTaskByUser(string user)
        {
          List<Attivita> res = new List<Attivita>();
            res = (List<Attivita>)(from t in taskPresenti
                  where t.utenteAssegnato == user
                  select t);

            return res;
        }
    }
}
