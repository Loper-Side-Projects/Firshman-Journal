using FishermanJournal.Models;
using Microsoft.AspNetCore.Mvc;

namespace FishermanJournal.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        [HttpGet]
        public async Task<IActionResult> HelloWorld()
        {
            var res = new HelloWorldResponseDto();
            return Ok(res);
        }
    }

    
}
