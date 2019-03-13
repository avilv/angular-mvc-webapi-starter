using angular_mvc_starter_kit.App_Start;
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
            config.EnableCors();
            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "apiCatchAll",
                routeTemplate: "api/{*catchall}",
               defaults: new { controller = "CatchAll" });

            config.Filters.Add(new JsonContentTypeFilterAttribute());
        }
    }
}
