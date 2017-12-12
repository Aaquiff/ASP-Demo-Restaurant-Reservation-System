using HotelReservationAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace HotelReservationAPI.Controllers
{
    public class ReservationsController : ApiController
    {
        Random r = new Random();

        static List<Reservation> reservations = new List<Reservation>()
        {
            new Reservation { ReservationId = "1" , UserId = "1", NumberOfGuests = 10, TableId = "1", TimeOfArrival = new DateTime(2017,12,1 ) }
        };

        public IEnumerable<Reservation> GetAllReservations()
        {
            return reservations;
        }

        public IHttpActionResult PostReservation(Reservation reservation)
        {
            try
            {
                reservation.ReservationId = r.Next().ToString();
                reservations.Add(reservation);
                return Ok();
            }
            catch (Exception)
            {
                return InternalServerError();
            }
        }
    }
}
