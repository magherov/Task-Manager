using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace esercizioBackend.Models
{
    public class Attivita
    { 
        [Key]
        public int id { get; set; } = 0;
        [Column("titolo")]
        public string titolo { get; set; } = "";
        public string descrizione { get; set; } = "";
        public User? utenteAssegnato { get; set; }
        public string stato { get; set; } = "";
        public int totaleOre { get; set; } = 0;
        public int oreLavorate { get; set; } = 0;
        public string commento { get; set; } = "";
    }
}
