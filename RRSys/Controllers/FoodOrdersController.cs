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
    public class FoodOrdersController : ApiController
    {
        static List<FoodOrder> foodOrders = new List<FoodOrder>()
        {
            new FoodOrder
            {
                OrderId = (new Random()).Next().ToString(),
                Foods = new List<Food>
                {
                    new Food { Name = "Spaghetti" },
                    new Food { Name = "Noodles" },
                    new Food { Name = "Rice and Curry" }
                }
            },
            new FoodOrder
            {
                OrderId = (new Random()).Next().ToString(),
                Foods = new List<Food>
                {
                    new Food { Name = "Rice and Curry" }
                }
            }
        };

        public IEnumerable<FoodOrder> GetAllFoods()
        {
            return foodOrders;
        }

        public IHttpActionResult PostFood(FoodOrder foodOrder)
        {
            try
            {
                foodOrders.Add(foodOrder);
                return Ok();
            }
            catch (Exception)
            {
                return InternalServerError();
            }
        }
    }
}
