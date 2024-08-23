using BLL.Services;
using System.Web.Mvc;

namespace TelerikMvcApp.Controllers
{
    public class DemoController : Controller
    {
        EmployeeService _employeeService = new EmployeeService();

        // GET: Demo
        public ActionResult Index()
        {
            return View();
        }

        public JsonResult GetEmployeeData()
        {
            var empList = _employeeService.GetEmployees();
            return Json(empList, JsonRequestBehavior.AllowGet);
        }
    }
}