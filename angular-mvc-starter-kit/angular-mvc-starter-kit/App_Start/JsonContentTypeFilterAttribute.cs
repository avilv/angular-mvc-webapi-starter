using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Headers;
using System.Net.Mime;
using System.Threading;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http.Controllers;
using System.Web.Http.Filters;
using System.Web.Http.Results;

namespace angular_mvc_starter_kit.App_Start
{
    /// <summary>
    /// Forces all WebAPI requests to support only application/json
    /// </summary>
    public class JsonContentTypeFilterAttribute : ActionFilterAttribute
    {
        public override Task OnActionExecutingAsync(HttpActionContext actionContext, CancellationToken cancellationToken)
        {
            if (actionContext.Request.Headers.Accept.Count > 0 && actionContext.Request.Headers.Accept.All(x => x.MediaType == "application/json"))
            {
                return base.OnActionExecutingAsync(actionContext, cancellationToken);
            }
            else
            {
                actionContext.Response = new System.Net.Http.HttpResponseMessage(System.Net.HttpStatusCode.UnsupportedMediaType);
                return Task.CompletedTask;
            }
          

        }
    }
}