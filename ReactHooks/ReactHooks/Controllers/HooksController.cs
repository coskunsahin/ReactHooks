using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using ReactHooks.Models;

namespace ReactHooks.Controllers
{
    [RoutePrefix("Api/Hooks")]
    public class HooksController : ApiController
    {
        dbcoreEntities DB = new dbcoreEntities();
        [HttpPost]
        public object CreateEmp(Emp e)
        {
            try
            {
                if (e.Id == 0)
                {
                    Employee em = new Employee();
                    em.Name = e.Name;
                    em.Department = e.Department;
                    em.Age = e.Age;
                    em.City = e.City;
                    em.Country = e.Country;
                    em.Gender = e.Gender;
                    DB.Employees.Add(em);
                    DB.SaveChanges();
                    return new Response
                    {
                        Status = "Success",
                        Message = "Data Successfully"
                    };
                }
                else
                {
                    var obj = DB.Employees.Where(x => x.Id == e.Id).ToList().FirstOrDefault();
                    if (obj.Id > 0)
                    {

                        obj.Name = e.Name;
                        obj.Department = e.Department;
                        obj.Age = e.Age;
                        obj.City = e.City;
                        obj.Country = e.Country;
                        obj.Gender = e.Gender;
                        DB.SaveChanges();
                        return new Response
                        {
                            Status = "Updated",
                            Message = "Updated Successfully"
                        };
                    }
                }
            }
            catch (Exception ex)
            {
                Console.Write(ex.Message);
            }
            return new Response
            {
                Status = "Error",
                Message = "Data not insert"
            };


        }
        [HttpGet]
        [Route("employee")]
        public object Getrecord()

        {
            var emp = DB.Employees.ToList();
            return emp;
        }


        [HttpDelete]
        public object Deleteemployee(int id)
        {
            var obj = DB.Employees.Where(x => x.Id == id).ToList().FirstOrDefault();
            DB.Employees.Remove(obj);
            DB.SaveChanges();
            return new Response
            {
                Status = "Delete",
                Message = "Delete Successfuly"
            };
        }
        [Route("employeedetails")]
        [HttpGet]
        public object employeedetailById(int id)
        {
            var obj = DB.Employees.Where(x => x.Id == id).ToList().FirstOrDefault();
            return obj;
        }
    }
}  
