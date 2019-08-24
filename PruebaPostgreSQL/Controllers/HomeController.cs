

using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;


namespace PruebaPostgreSQL.Controllers
{
    
    public class HomeController : Controller
    {
       public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        [HttpPost]
        public ActionResult MenuAccionRapida(string q)
        {
            switch(q)
            {
                case "TR02": return RedirectToAction("Create","TerceroMaestro");
                
            }
            return RedirectToAction("Index");
        }
    }
}