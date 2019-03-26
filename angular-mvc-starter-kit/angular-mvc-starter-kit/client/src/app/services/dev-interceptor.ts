import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from "@angular/common/http";
import { Observable, timer } from "rxjs";
import { Injectable } from "@angular/core";
import { delay, switchMap } from "rxjs/operators";
import {Location} from "@angular/common";
@Injectable()
export class DevInterceptor implements HttpInterceptor {
 
  constructor(private location : Location) {
    
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   
    let url = this.location.normalize(req.url)

    console.trace(`intercepting call to ${req.url}, replaced with ${url}`) 
    /*const url = 'http://localhost:26143/';
    req = req.clone({
      url: req.url.replace("./", url)
    });

    return timer(2000).pipe(         // <== Wait 2 Seconds
        switchMap( ()=> next.handle(req) )   // <== Switch to the Http Stream
      );
      */
     return next.handle(req);
  }
}