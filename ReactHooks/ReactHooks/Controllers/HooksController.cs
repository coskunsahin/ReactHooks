using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;
using ReactHooks.Models;


namespace ReactHooks.Controllers
{
    [RoutePrefix("Api/Hooks")]
    [EnableCors(origins: "http://localhost:3000", headers: "*", methods: "*")]
    public class HooksController : ApiController


    {
       NorthwindEntities DB = new NorthwindEntities();











        [HttpPost]
       
        public object CreateEmp([FromBody] EmployeerEntity e)

        {
            try
            {
                if (e.id == 0)
                {
                    Employee em = new Employee();
                    em.FirstName = e.firstName;
                    em.LastName = e.lastName;
                    em.Title = e.title;
                    em.ReportsTo = e.reportNumber;
                    em.City = e.city;
                    em.Country = e.country;
                    em.BirthDate = e.birthDate;
                    em.HireDate = e.hireDate;
                    em.TitleOfCourtesy = e.titleOfCourtesy;
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
                    var obj = DB.Employees.Where(x => x.EmployeeID == e.id).ToList().FirstOrDefault();
                    if (obj.EmployeeID > 0)
                    {
                        obj.FirstName = e.firstName;
                        obj.LastName = e.lastName;
                        obj.Title = e.title;
                        obj.ReportsTo = e.reportNumber;
                        obj.BirthDate = e.birthDate;
                        obj.HireDate = e.hireDate;
                        obj.City = e.city;
                        obj.Country = e.country;
                        obj.TitleOfCourtesy = e.titleOfCourtesy;


                       // DB.SaveChanges();
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

        [HttpPost]
        [Route("CreateEmps")]
        public IHttpActionResult CreateEmps([FromBody] EmployeerEntity e)
        {
            var obj = DB.Employees.Where(x => x.EmployeeID == e.id).ToList().FirstOrDefault();
            if (obj.EmployeeID > 0)
            {
                obj.FirstName = e.firstName;
                obj.LastName = e.lastName;
                obj.Title = e.title;
                obj.BirthDate = e.birthDate;
                obj.HireDate = e.hireDate;
                obj.ReportsTo = e.reportNumber;
                obj.City = e.city;
                obj.Country = e.country;
                obj.TitleOfCourtesy = e.titleOfCourtesy;


                DB.SaveChanges();
                
            }
            return Ok(e);
        }
        [HttpGet]
        [Route("employee")]



        
      public object Getrecord()

        {
            var emp = DB.Employees.Select(k=>new EmployeerEntity { id = k.EmployeeID,firstName=k.FirstName, lastName = k.LastName, reportNumber = k.ReportsTo, title = k.Title,birthDate=k.BirthDate,hireDate=k.HireDate, country = k.Country,city=k.City, titleOfCourtesy =k.TitleOfCourtesy}).ToList();
            return emp;
        }


    [HttpDelete]
    public object Deleteemployee(int id)
    {
         var obj = DB.Employees.Where(x => x.EmployeeID == id).ToList().FirstOrDefault();
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
        public object employeedetailByid(int id)
        {
            var obj = DB.Employees.Where(x => x.EmployeeID== id).Select(k => new EmployeerEntity{ id = k.EmployeeID,firstName=k.FirstName, lastName = k.LastName,reportNumber = k.ReportsTo,title = k.Title, birthDate = k.BirthDate, hireDate = k.HireDate, country = k.Country, city = k.City, titleOfCourtesy = k.TitleOfCourtesy }).ToList().FirstOrDefault();
           return obj;
        }
    }

   
    } 

 
