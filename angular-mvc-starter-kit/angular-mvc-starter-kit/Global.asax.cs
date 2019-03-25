using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;
using System.Web.Security;
using System.Web.SessionState;
using System.Web.Http;

namespace angular_mvc_starter_kit
{
    public class Global : HttpApplication
    {
        void Application_Start(object sender, EventArgs e)
        {
            MvcHandler.DisableMvcResponseHeader = true;
            GlobalConfiguration.Configure(WebApiConfig.Register); // WebAPI

            // MVC
            MvcConfig.RegisterRoutes(RouteTable.Routes);
            MvcConfig.RegisterFilters(GlobalFilters.Filters);

            
        }
    }
}