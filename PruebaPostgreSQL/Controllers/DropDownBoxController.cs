
using Newtonsoft.Json;
using System.Linq;
using System.Web.Mvc;

namespace PruebaPostgreSQL.Controllers
{
    public class DropDownBoxController : Controller
    {
        public ActionResult SingleSelection()
        {
            return View();
        }
    }
}