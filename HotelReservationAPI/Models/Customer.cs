﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HotelReservationAPI.Models
{
    public class Customer
    {
        public string UserId { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
    }
}