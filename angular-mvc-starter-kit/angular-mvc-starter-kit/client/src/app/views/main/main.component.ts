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

  public text$: any;// Observable<AsyncRequest<string, HttpErrorResponse>>;

  public test: string = "test 123";

  public httpQuery$ : Observable<AsyncRequest<string, HttpErrorResponse>>;

  btnClick() {
    this.httpQuery$ = this.http.get<string>("./api/text").pipe(asAsyncRequest<string, HttpErrorResponse>());
   
/*
    httpQuery.subscribe(response => {
      switch (response.state) {
        case "loading":
          showLoadingAnimation();
          break;
        case "success":
          showData(response.value);
          break;
        case "error":
          showError(response.value.message);
          break;
      }
    });

    this.text$ = */
  }

  ngOnInit() {
   
  //  this.text$ = this.http.get<string>("./api/text"); // AsyncRequest<string, HttpErrorResponse>(this.http.get<string>("./api/text"));

  }

}



// const AsyncRequest = <TValue, TError>(request: Observable<TValue>): Observable<AsyncRequest<TValue, TError>> => {

//   return new Observable(sub => {
//     sub.next(RequestLoading());
//     request
//       .pipe(
//         take(1),
//         catchError(err => {
//           sub.next(RequestError(<TError>err));
//           return throwError(err);
//         })
//       )
//       .subscribe(val => sub.next(RequestSuccess(val)));
//   });


// }



// type AsyncRequest<TValue, TError> = RequestLoading | RequestSuccess<TValue> | RequestError<TError>;


// interface RequestLoading {
//   loading: true;
// }
// interface RequestSuccess<T> {
//   loading: false;
//   success: true;
//   value: T;
// }

// interface RequestError<T> {
//   loading: false;
//   success: false;
//   value: T;
// }
// const RequestLoading = (): RequestLoading => ({ loading: true });

// const RequestSuccess = <T>(value: T): RequestSuccess<T> => ({
//   loading: false,
//   success: true,
//   value,
// })

// const RequestError = <T>(value: T): RequestError<T> => ({
//   loading: false,
//   success: false,
//   value,
// })