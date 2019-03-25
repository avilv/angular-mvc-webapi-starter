using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http.Cors;
using System.Web.Mvc;
using System.Web.Routing;

namespace angular_mvc_starter_kit
{
    public class MvcConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.MapRoute(
                name: "Default",
                url: "{*catchall}",
                defaults: new { controller = "Default", action = "Index", id = UrlParameter.Optional }
            );
        }

        public static void RegisterFilters(GlobalFilterCollection filters)
        {
            filters.Add(new AuthorizeAttribute());
        }
    }
}
