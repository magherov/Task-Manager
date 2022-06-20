using Microsoft.AspNetCore.Mvc;
using esercizioBackend.Models;
using esercizioBackend.Services;

namespace esercizioBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class taskController : ControllerBase
    {
        private readonly TaskService _taskService;
        public taskController(TaskService taskService)
        {
            _taskService = taskService;
        }

        // GET: api/<taskController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<taskController>/search
        [HttpGet]
        [Route("search")]
        public List<Attivita> GetAlltask()
        {
            try
            {
                List<Attivita> ret = new List<Attivita>();
                return ret = dbSimulatorcs.getAllTask();

            }
            catch (Exception ex)
            {
                throw new ArgumentException($"errore nella GetAlltask: {ex} ");
            }
        }


        // POST api/<taskController>
        [HttpPost]
        [Route("search/filtered")]
        public List<Attivita> GetTaskFiltered(string stato)
        {
            try 
            { 
                return dbSimulatorcs.GetTaskWithStato(stato);
            }
            catch (Exception ex)
            {
                throw new ArgumentException($"errore nella GetTaskFiltered: {ex} ");
            }
        }


        // PUT api/<taskController>/5
        [HttpPut]
        [Route("inserimento")]
        public void insert( [FromBody] Attivita task)
        {
            try
            {
                _taskService.insertTask();
            }
            catch(Exception ex)
            {
                throw new ArgumentException($"errore nella insert: {ex} ");
            }
        }

        // DELETE api/<taskController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
