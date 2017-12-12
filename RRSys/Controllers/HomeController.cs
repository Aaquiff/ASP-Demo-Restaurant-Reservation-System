using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace RRSys.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Title = "Home Page";

            return View();
        }

        public ActionResult Login()
        {
            ViewBag.Title = "Login";

            return View();
        }

        public ActionResult CreateReservation()
        {
            ViewBag.Title = "Create Reservation";

            return View();
        }

        public ActionResult FoodList()
        {
            ViewBag.Title = "Order Foods";

            return View();
        }
    }
}
