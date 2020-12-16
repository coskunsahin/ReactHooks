using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ReactHooks.Models
{
    public class EmployeerEntity
    {

        public int id { get; set; }
        public string firstName { get; set; }
        public string lastName { get; set; }
        public string title { get; set; }
        public int? reportNumber { get; set; }
        public Nullable<System.DateTime> birthDate { get; set; }
        public Nullable<System.DateTime> hireDate { get; set; }
        public string city { get; set; }
        public string country { get; set; }
        public string titleOfCourtesy { get; set; }
    }
}
