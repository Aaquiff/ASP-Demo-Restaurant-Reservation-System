using HotelReservationAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace HotelReservationAPI.Controllers
{
    public class CustomersController : ApiController
    {
        static List<Customer> customers = new List<Customer>()
        {
            new Customer { UserId = "1" , Address = "Test" , Email = "aaquiff@gmail.com" , Name = "Aaquiff", Phone = "0771413433" }
        };

        public IEnumerable<Customer> GetAllCustomers()
        {
            return customers;
        }

        public IHttpActionResult PostCustomer(Customer customer)
        {
            try
            {
                customers.Add(customer);
                return Ok();
            }
            catch (Exception)
            {
                return InternalServerError();
            }
        }

        public IHttpActionResult DeleteCustomer(string id)
        {
            try
            {
                customers.RemoveAll(p => p.UserId == id);
                return Ok();
            }
            catch (Exception)
            {
                return InternalServerError();
            }
        }
    }
}
