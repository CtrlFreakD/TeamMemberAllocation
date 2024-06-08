using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using TeamMemberAllocation.Data;
using TeamMemberAllocation.Models;

namespace TeamMemberAllocation.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TeamsController : ControllerBase
    {
        private readonly ApplicationDbContext _db;
        public TeamsController(ApplicationDbContext db)
        {
            _db = db;
        }

        [HttpGet]
        public IEnumerable<Team> Get()
        {
            return _db.teams
            .ToArray();
        }

        [HttpPost]
        public IActionResult SaveTeams(Team[] t)
        {
            _db.UpdateRange(t);
            _db.SaveChanges();
            return Ok();
        }
    }
}