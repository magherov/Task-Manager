namespace esercizioBackend.Models
{
    public static class dbSimulatorcs
    {
        private static List<Attivita> taskPresenti;
        private static List<User> userPresenti;
        private static int lastPkAssigned;

        static dbSimulatorcs()
        {
            List<Attivita> tasklist = new List<Attivita>()
                {
                    new Attivita() { id = 1, titolo = "Impara Angular", descrizione = "impariamo angular", stato = "Backlog", commento = "", oreLavorate = 10, totaleOre = 10, utenteAssegnato={ name = "Alessandro"}},
                    new Attivita() { id = 2, titolo = "Impara React", descrizione = "impariamo React", stato = "", commento = "", oreLavorate = 10, totaleOre = 10, utenteAssegnato= { name = "Federico"} },
                    new Attivita() { id = 3, titolo = "Impara C#", descrizione = "impariamo C#", stato = "", commento = "", oreLavorate = 10, totaleOre = 10, utenteAssegnato ={ name = "Filippo" } }
                };
            lastPkAssigned = tasklist[tasklist.Count - 1].id;
            taskPresenti = tasklist;


            List<User> userlist = new List<User>()
                {
                    new User() { id = 1, userName = "Alessandro", password = "1234A" },
                    new User() { id = 2, userName = "Federico", password = "1234F" },
                    new User() { id = 3, userName = "Filippo", password = "1234F" }
                };
            userPresenti = userlist;
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

        public static Attivita nuovoTask(Attivita task)
        {
            lastPkAssigned += 1;
            task.id = lastPkAssigned;

            taskPresenti.Add(task);

            return task;
        }


        public static List<Attivita> getAllTask()
        {
            return taskPresenti;
        }

    }
}
