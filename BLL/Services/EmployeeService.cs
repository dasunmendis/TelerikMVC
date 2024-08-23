using DAL.Entities;
using System.Collections.Generic;

namespace BLL.Services
{
    public class EmployeeService
    {
        public List<Employee> GetEmployees()
        {
            var empList = new List<Employee>()
            {
                new Employee() { Id = 1, Name = "ABC" },
                new Employee() { Id = 2, Name = "AAA" },
                new Employee() { Id = 3, Name = "XYZ" }
            };
            return empList;
        }
    }
}
