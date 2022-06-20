using System.ComponentModel.DataAnnotations;

namespace esercizioBackend.Models
{ 
    public class User
    {
        [Key]
        public int id { get; set; }
        public string name { get; set; }
        public string lastname { get; set; } = "";
        public string userName { get; set; } = "";
        public string password { get; set; } = "";
    }
}
