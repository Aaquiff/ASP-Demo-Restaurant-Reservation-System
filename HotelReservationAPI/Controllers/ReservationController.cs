using HotelReservationAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace HotelReservationAPI.Controllers
{
    public class ReservationController : ApiController
    {
        static List<Reservation> reservations = new List<Reservation>()
        {
            new Reservation { ReservationId = "1" , UserId = "1" }
        };

        public IHttpActionResult PostReservation(Reservation reservation)
        {
            try
            {
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
