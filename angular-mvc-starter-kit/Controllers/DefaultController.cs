using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace angular_mvc_starter_kit.Controllers
{
    public class DefaultController : Controller
    {
        [OutputCache(Duration = int.MaxValue)]
        public ActionResult Index()
        {
            return View();
        }
    }
}