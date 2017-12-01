using HotelReservationAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace HotelReservationAPI.Controllers
{
    [Authorize]
    public class FoodsController : ApiController
    {
        static List<Food> foods = new List<Food>()
        {
            new Food { Name = "Spaghetti" },
            new Food { Name = "Egg Roll" },
            new Food { Name = "Noodles" },
            new Food { Name = "Rice and Curry" }
        };

        public IEnumerable<Food> GetAllFoods()
        {
            return foods;
        }

        public IHttpActionResult PostFood(Food food)
        {
            try
            {
                foods.Add(food);
                return Ok();
            }
            catch (Exception)
            {
                return InternalServerError();
            }
        }
    }
}
