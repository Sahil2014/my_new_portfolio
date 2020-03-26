using System;
using System.Collections.Generic;

using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using System.Web;
using Microsoft.AspNet.Identity;


using System.Web.Configuration;
using System.Net.Mail;
using System.Net;

namespace my_portfolio
{
    public class EmailService : IIdentityMessageService
    {
        public Task SendAsync(IdentityMessage message)
        {
            // Plug in your email service here to send an email.
            return Task.FromResult(0);
        }
        public async Task<bool> SendMailAsync(IdentityMessage message, string fromEmail)
        {
            var GmailUsername = WebConfigurationManager.AppSettings["username"];
            var GmailPassword = WebConfigurationManager.AppSettings["password"];
            var host = WebConfigurationManager.AppSettings["host"];
            int port = Convert.ToInt32(WebConfigurationManager.AppSettings["port"]);

            var from = new MailAddress(WebConfigurationManager.AppSettings["emailfrom"], fromEmail);
            //Email object set up
            var email = new MailMessage(from, new MailAddress(message.Destination))
            {
                Subject = message.Subject,
                Body = message.Body,
                IsBodyHtml = true,
            };
            //SMTP object set up
            using (var smtp = new SmtpClient()
            {
                Host = host,
                Port = port,
                EnableSsl = true,
                DeliveryMethod = SmtpDeliveryMethod.Network,
                UseDefaultCredentials = false,
                Credentials = new NetworkCredential(GmailUsername, GmailPassword)
            })

                try
                { await smtp.SendMailAsync(email); return true; }
                catch (Exception e)
                {
                    Console.WriteLine(e.Message);
                    return false;
                }
        }
    }



   
}
