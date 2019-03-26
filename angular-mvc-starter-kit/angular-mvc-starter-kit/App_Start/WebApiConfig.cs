using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Cors;

namespace angular_mvc_starter_kit
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
          
            
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "apiCatchAll",
                routeTemplate: "api/{*catchall}",
               defaults: new { controller = "CatchAll" });

            config.Filters.Add(new AuthorizeAttribute());

#if DEBUG
            config.EnableCors(new EnableCorsAttribute("*", "*", "*", "Content-Disposition") { SupportsCredentials = true });
            config.IncludeErrorDetailPolicy = IncludeErrorDetailPolicy.Always;
#else
            config.IncludeErrorDetailPolicy = IncludeErrorDetailPolicy.Never;
#endif 
        }
    }
}
