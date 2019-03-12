using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace angular_mvc_starter_kit
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services

            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "apiCatchAll",
                routeTemplate: "api/{*catchall}",
               defaults: new { controller = "CatchAll" });
        }
    }
}
