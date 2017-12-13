using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HotelReservationAPI.Models
{
    public class Food
    {
        public string Name { get; set; }
    }

    public class FoodOrder
    {
        public string OrderId { get; set; }
        public IEnumerable<Food> Foods { get; set; }
        public Payment Payment { get; set; }
    }

    public class Payment
    {
        public string PaymentType { get; set; }
        public int Amount { get; set; }
        public string CardHolderName { get; set; }
        public string CreditCardNumber { get; set; }
        public int CVC { get; set; }
    }
}