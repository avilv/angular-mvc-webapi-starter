using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace angular_mvc_starter_kit.ApiControllers
{
    [RoutePrefix("api")]
    public class DefaultController : ApiController
    {
        
        [Route("text")]
        [HttpGet]
        public IHttpActionResult Text()
        { 
            return Ok("Got some text!");
        }

        
    }
}