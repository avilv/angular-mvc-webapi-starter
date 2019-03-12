using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Mvc;

namespace angular_mvc_starter_kit.Controllers
{
    public class CatchAllController : ApiController
    {

        [System.Web.Http.HttpGet]
        public IHttpActionResult Get()
        {
            return NotFound();
        }

        [System.Web.Http.HttpPost]
        public IHttpActionResult Post()
        {
            return NotFound();
        }
    }
}
