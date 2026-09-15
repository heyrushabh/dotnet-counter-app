using CounterApi.Data;
using CounterApi.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CounterApi.Controllers;

[ApiController]
[Route("[controller]")]
public class CounterController : ControllerBase
{
    private readonly ApplicationDbContext _db;

    public CounterController(ApplicationDbContext db)
    {
        _db = db;
    }

    [HttpGet]
    public async Task<IActionResult> Get()
    {
        var counter = await _db.Counters.FirstOrDefaultAsync();

        if (counter == null)
        {
            counter = new Counter
            {
                Value = 0
            };

            _db.Counters.Add(counter);
            await _db.SaveChangesAsync();
        }

        return Ok(counter);
    }

    [HttpPost("increment")]
public async Task<IActionResult> Increment()
{
    var counter = await _db.Counters.FirstOrDefaultAsync();

    if (counter == null)
    {
        counter = new Counter
        {
            Value = 0
        };

        _db.Counters.Add(counter);
    }

    counter.Value++;

    await _db.SaveChangesAsync();

    return Ok(counter);
}

}