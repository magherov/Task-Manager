using Microsoft.AspNetCore.Mvc;
using esercizioBackend.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace esercizioBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        // GET: api/<UserControllercs>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<UserControllercs>/5
        [HttpGet]
        [Route("search")]
        public  List<User> GetAllUser()
        {
            List<User> users = dbSimulator.GetAllUser();
            return users;
        }

        // POST api/<UserControllercs>

        // PUT api/<UserControllercs>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<UserControllercs>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
