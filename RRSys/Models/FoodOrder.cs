using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HotelReservationAPI.Models
{
    public class FoodOrder
    {
        public string OrderId { get; set; }
        public IEnumerable<Food> Foods { get; set; }
    }
}