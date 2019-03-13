using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Controllers;
using System.Web.Mvc;

namespace angular_mvc_starter_kit.Controllers
{
    public class CatchAllController : ApiController
    {
        public override Task<HttpResponseMessage> ExecuteAsync(HttpControllerContext controllerContext, CancellationToken cancellationToken)
        {
            HttpResponseMessage response = new HttpResponseMessage(HttpStatusCode.NotFound);
            response.Content = new StringContent(string.Empty);
            response.RequestMessage = Request;
            return Task.FromResult(response);
        }
    }
}
