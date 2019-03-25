using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security.AccessControl;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Cors;

namespace angular_mvc_starter_kit.ApiControllers
{
    [RoutePrefix("api")]
    public class DefaultController : ApiController
    {

        [Route("text")]
        [HttpGet]
        public async Task<IHttpActionResult> Text()
        {
            return Ok(new { Data = "test" });
        }

        [Route("testError")]
        [HttpGet]
        public async Task<IHttpActionResult> TestError()
        {
            throw new Exception("an exception occured.");
        }
    }
}