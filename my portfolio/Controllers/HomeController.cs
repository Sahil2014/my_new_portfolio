using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using Microsoft.AspNet.Identity;
using my_portfolio.Models;

namespace my_portfolio.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            var model = new EmailModel();
            return View();
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Contact(EmailModel model)
        {
            if (ModelState.IsValid)
            {
                try
                {

                    var svc = new EmailService();
                    var msg = new IdentityMessage()
                    {
                        Subject = $"A message from your portfolio by {model.FromEmail}:{model.Subject}",
                        Body = model.Body,
                        Destination = "sharma.sahilsharma207@gmail.com"//ADD YOUR PERSONAL EMAIL ADDRESS HERE!};awaitsvc.SendAsync(msg);returnView();}catch (Exception ex){Console.WriteLine(ex.Message);await Task.FromResult(0);returnView(model);}}else{ returnView(model); }
                    };
                    await svc.SendMailAsync(msg, model.FromEmail);
                    return RedirectToAction("Index", "Home");
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.Message);
                    await Task.FromResult(0);
                    return View(model);
                }
            }
            else
            {
                return View(model);
            }
        }
    }
}