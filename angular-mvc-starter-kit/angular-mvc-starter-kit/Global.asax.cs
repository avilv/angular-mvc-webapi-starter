using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;
using System.Web.Security;
using System.Web.SessionState;
using System.Web.Http;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using Newtonsoft.Json.Serialization;

namespace angular_mvc_starter_kit
{
    public class Global : HttpApplication
    {
        void Application_Start(object sender, EventArgs e)
        {
            InitializeJsonConfiguration();

            MvcHandler.DisableMvcResponseHeader = true;
            GlobalConfiguration.Configure(WebApiConfig.Register); // WebAPI

            // MVC
            MvcConfig.RegisterRoutes(RouteTable.Routes);
            MvcConfig.RegisterFilters(GlobalFilters.Filters);


        }

        private static void InitializeJsonConfiguration()
        {
            var formatter = GlobalConfiguration.Configuration.Formatters.JsonFormatter;
            formatter.SerializerSettings = new JsonSerializerSettings
            {
#if DEBUG
                Formatting = Formatting.Indented,
#else
                Formatting = Formatting.None,
#endif
                TypeNameHandling = TypeNameHandling.None,
                ContractResolver = new CamelCasePropertyNamesContractResolver(),
            };
            formatter.SerializerSettings.Converters.Add(new StringEnumConverter { CamelCaseText = true });
        }

    }
}