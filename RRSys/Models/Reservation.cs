using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HotelReservationAPI.Models
{
    public class Reservation
    {
        public string ReservationId { get; set; }
        public string TableId { get; set; }
        public string UserId { get; set; }
        public string Email { get; set; }
        public int NumberOfGuests { get; set; }
        public DateTime TimeOfArrival { get; set; }
    }
}