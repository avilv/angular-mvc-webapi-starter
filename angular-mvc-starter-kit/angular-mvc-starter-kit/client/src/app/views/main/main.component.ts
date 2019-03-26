import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError, of, Subject } from 'rxjs';
import { catchError, map, take, delay } from 'rxjs/operators';
import { TransitiveCompileNgModuleMetadata, CompileShallowModuleMetadata } from '@angular/compiler';
import { TouchSequence } from 'selenium-webdriver';
import { asAsyncRequest, AsyncRequest } from '@aviellv/async-request-rxjs-pipe';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private http: HttpClient) { }


  public httpQuery$: Observable<string>;

  btnClick() {
    this.httpQuery$ = this.http.get<string>("./api/text", { withCredentials: true });
  }

  ngOnInit() {


  }

}

