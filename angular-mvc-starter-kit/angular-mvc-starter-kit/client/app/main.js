(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _views_main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/main/main.component */ "./src/app/views/main/main.component.ts");
/* harmony import */ var _views_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/dashboard/dashboard.component */ "./src/app/views/dashboard/dashboard.component.ts");





var routes = [
    { path: '', redirectTo: '/my/route/main', pathMatch: 'full' },
    { path: 'my/route/main', component: _views_main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"] },
    { path: 'my/route/dashboard', component: _views_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div style=\"text-align:center\">\r\n  <h1>\r\n    Welcome to {{ title }}!\r\n  </h1>\r\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\r\n</div>\r\n\r\n<router-outlet></router-outlet>\r\n<h2>Here are some links to help you start: </h2>\r\n<ul>\r\n  <li>\r\n      <a routerLink=\"/\" routerLinkActive=\"active\">Home</a>\r\n  </li>\r\n  <li>\r\n      <a routerLink=\"/my/route/dashboard\" routerLinkActive=\"active\">Dashboard</a>\r\n  </li>\r\n</ul>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'angular-mvc-starter-kit';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _views_main_main_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/main/main.component */ "./src/app/views/main/main.component.ts");
/* harmony import */ var _views_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/dashboard/dashboard.component */ "./src/app/views/dashboard/dashboard.component.ts");
/* harmony import */ var _services_dev_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/dev-interceptor */ "./src/app/services/dev-interceptor.ts");
/* harmony import */ var _directives_async_request_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./directives/async.request.directive */ "./src/app/directives/async.request.directive.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _views_main_main_component__WEBPACK_IMPORTED_MODULE_7__["MainComponent"],
                _views_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"],
                _directives_async_request_directive__WEBPACK_IMPORTED_MODULE_10__["NgAwait"],
                _directives_async_request_directive__WEBPACK_IMPORTED_MODULE_10__["NgAwaitLoading"],
                _directives_async_request_directive__WEBPACK_IMPORTED_MODULE_10__["NgAwaitFailure"],
                _directives_async_request_directive__WEBPACK_IMPORTED_MODULE_10__["NgAwaitSuccess"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
            ],
            providers: [
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"], useClass: _services_dev_interceptor__WEBPACK_IMPORTED_MODULE_9__["DevInterceptor"], multi: true }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/directives/async.request.directive.ts":
/*!*******************************************************!*\
  !*** ./src/app/directives/async.request.directive.ts ***!
  \*******************************************************/
/*! exports provided: NgAwait, NgAwaitLoading, NgAwaitSuccess, NgAwaitFailure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgAwait", function() { return NgAwait; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgAwaitLoading", function() { return NgAwaitLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgAwaitSuccess", function() { return NgAwaitSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgAwaitFailure", function() { return NgAwaitFailure; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _aviellv_async_request_rxjs_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @aviellv/async-request-rxjs-pipe */ "./node_modules/@aviellv/async-request-rxjs-pipe/dist/index.js");
/* harmony import */ var _aviellv_async_request_rxjs_pipe__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_aviellv_async_request_rxjs_pipe__WEBPACK_IMPORTED_MODULE_3__);




var NgAwait = /** @class */ (function () {
    function NgAwait() {
    }
    NgAwait.prototype.setActiveView = function (view) {
        if (this.activeView !== view) {
            if (this.activeView)
                this.activeView.destroyView();
            this.activeView = view;
        }
    };
    Object.defineProperty(NgAwait.prototype, "ngAwait", {
        set: function (request) {
            this.setRequest(request);
        },
        enumerable: true,
        configurable: true
    });
    NgAwait.prototype.onRequestState = function (requestState) {
        switch (requestState.state) {
            case "loading": {
                this.setActiveView(this.awaitLoadingView);
                if (this.awaitLoadingView)
                    this.awaitLoadingView.createView();
                break;
            }
            case "success": {
                this.setActiveView(this.awaitSuccessView);
                if (this.awaitSuccessView)
                    this.awaitSuccessView.createView(requestState.value);
                break;
            }
            case "error": {
                this.setActiveView(this.awaitFailureView);
                if (this.awaitFailureView)
                    this.awaitFailureView.createView(requestState.value);
                break;
            }
        }
    };
    NgAwait.prototype.setRequest = function (request) {
        var _this = this;
        if (this._requestSubscription)
            this._requestSubscription.unsubscribe();
        this.setActiveView(null);
        this._request = request.pipe(Object(_aviellv_async_request_rxjs_pipe__WEBPACK_IMPORTED_MODULE_3__["asAsyncRequest"])());
        this._requestSubscription = this._request.subscribe(function (req) { return _this.onRequestState(req); });
    };
    NgAwait.prototype._setAwaitSuccess = function (view) {
        this.awaitSuccessView = view;
    };
    NgAwait.prototype._setAwaitFailure = function (view) {
        this.awaitFailureView = view;
    };
    NgAwait.prototype._setAwaitLoading = function (view) {
        this.awaitLoadingView = view;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]])
    ], NgAwait.prototype, "ngAwait", null);
    NgAwait = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: '[ngAwait]' })
    ], NgAwait);
    return NgAwait;
}());

var NgAwaitLoading = /** @class */ (function () {
    function NgAwaitLoading(viewContainer, templateRef, ngAsyncAwait) {
        this.viewContainer = viewContainer;
        this.templateRef = templateRef;
        ngAsyncAwait._setAwaitLoading(this);
    }
    NgAwaitLoading.prototype.createView = function () {
        this.viewContainer.createEmbeddedView(this.templateRef);
    };
    NgAwaitLoading.prototype.destroyView = function () {
        this.viewContainer.clear();
    };
    NgAwaitLoading = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: '[ngAwaitLoading]' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"],
            NgAwait])
    ], NgAwaitLoading);
    return NgAwaitLoading;
}());

var NgAwaitSuccess = /** @class */ (function () {
    function NgAwaitSuccess(viewContainer, templateRef, ngAsyncAwait) {
        this.viewContainer = viewContainer;
        this.templateRef = templateRef;
        ngAsyncAwait._setAwaitSuccess(this);
    }
    NgAwaitSuccess.prototype.createView = function (value) {
        this.viewContainer.createEmbeddedView(this.templateRef, { $implicit: value, ngAwaitSuccess: value });
    };
    NgAwaitSuccess.prototype.destroyView = function () {
        this.viewContainer.clear();
    };
    Object.defineProperty(NgAwaitSuccess.prototype, "ngAwaitFailure", {
        set: function (context) {
        },
        enumerable: true,
        configurable: true
    });
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], NgAwaitSuccess.prototype, "ngAwaitFailure", null);
    NgAwaitSuccess = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: '[ngAwaitSuccess]' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"],
            NgAwait])
    ], NgAwaitSuccess);
    return NgAwaitSuccess;
}());

var NgAwaitFailure = /** @class */ (function () {
    function NgAwaitFailure(viewContainer, templateRef, ngAsyncAwait) {
        this.viewContainer = viewContainer;
        this.templateRef = templateRef;
        ngAsyncAwait._setAwaitFailure(this);
    }
    NgAwaitFailure.prototype.createView = function (value) {
        this.viewContainer.createEmbeddedView(this.templateRef, { $implicit: value, ngAwaitFailure: value });
    };
    NgAwaitFailure.prototype.destroyView = function () {
        this.viewContainer.clear();
    };
    Object.defineProperty(NgAwaitFailure.prototype, "ngAwaitFailure", {
        set: function (context) {
        },
        enumerable: true,
        configurable: true
    });
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], NgAwaitFailure.prototype, "ngAwaitFailure", null);
    NgAwaitFailure = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: '[ngAwaitFailure]' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"],
            NgAwait])
    ], NgAwaitFailure);
    return NgAwaitFailure;
}());

/*
const asAsyncRequest = <TValue, TError>() => (source: Observable<any>): Observable<AsyncRequest<TValue, TError>>  => {
    return new Observable(observer => {
        observer.next(RequestLoading());
        return source.subscribe({
            next(val) {
                observer.next(RequestSuccess(val));
            },
            error(err) {
                observer.next(RequestError(err));
                observer.error(err);
            },
            complete() { observer.complete(); }
        });
    });
};


const AsyncRequest = <TValue, TError>(request: Observable<TValue>): Observable<AsyncRequest<TValue, TError>> => {

    return new Observable(sub => {
        sub.next(RequestLoading());
        request
            .pipe(
                take(1),
                catchError(err => {
                    sub.next(RequestError(<TError>err));
                    return throwError(err);
                })
            )
            .subscribe(val => sub.next(RequestSuccess(val)));
    });
}



type AsyncRequest<TValue, TError> = RequestLoading | RequestSuccess<TValue> | RequestError<TError>;


interface RequestLoading {
    state: "loading";
}
interface RequestSuccess<T> {
    state: "success";
    value: T;
}

interface RequestError<T> {
    state: "error";
    value: T;
}
const RequestLoading = (): RequestLoading => ({ state: "loading" });

const RequestSuccess = <T>(value: T): RequestSuccess<T> => ({
    state: "success",
    value,
})

const RequestError = <T>(value: T): RequestError<T> => ({
    state: "error",
    value,
})
*/ 


/***/ }),

/***/ "./src/app/services/dev-interceptor.ts":
/*!*********************************************!*\
  !*** ./src/app/services/dev-interceptor.ts ***!
  \*********************************************/
/*! exports provided: DevInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevInterceptor", function() { return DevInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var DevInterceptor = /** @class */ (function () {
    function DevInterceptor() {
    }
    DevInterceptor.prototype.intercept = function (req, next) {
        var url = 'http://localhost:26143/';
        req = req.clone({
            url: req.url.replace("./", url)
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(2000).pipe(// <== Wait 2 Seconds
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function () { return next.handle(req); }) // <== Switch to the Http Stream
        );
    };
    DevInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
    ], DevInterceptor);
    return DevInterceptor;
}());



/***/ }),

/***/ "./src/app/views/dashboard/dashboard.component.css":
/*!*********************************************************!*\
  !*** ./src/app/views/dashboard/dashboard.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/views/dashboard/dashboard.component.html":
/*!**********************************************************!*\
  !*** ./src/app/views/dashboard/dashboard.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  dashboard works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/views/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/views/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/views/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/views/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/views/main/main.component.css":
/*!***********************************************!*\
  !*** ./src/app/views/main/main.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL21haW4vbWFpbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/main/main.component.html":
/*!************************************************!*\
  !*** ./src/app/views/main/main.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  main works!\r\n</p>\r\n<div> \r\n  <button (click)=\"btnClick()\">do it</button>\r\n  <!--\r\n    <ng-container [ngAwait]=\"text$\">\r\n      <div>some stuff..</div>\r\n         <ng-container *ngAwaitLoading>loading..</ng-container>   \r\n        <ng-container *ngAwaitSuccess=\"let data\"> data result: {{ data }}</ng-container> \r\n       <ng-container *ngAwaitFailure=\"let error\"> error has occured: {{ error.message }}</ng-container>\r\n    </ng-container>\r\n-->\r\n    <span *ngIf=\"(httpQuery$ | async) as response\">\r\n      <ng-container [ngSwitch]=\"response.state\">\r\n        <ng-container *ngSwitchCase=\"'loading'\">loading data...</ng-container>\r\n        <ng-container *ngSwitchCase=\"'success'\">{{response.value}}</ng-container>\r\n        <ng-container *ngSwitchCase=\"'error'\">{{response.value}}</ng-container>\r\n        \r\n      </ng-container>\r\n    </span>\r\n\r\n    \r\n  <!-- <ng-container [ngAwait]=\"text$\">\r\n      <ng-container *ngAwaitLoading>loading..</ng-container>  \r\n    <ng-container *ngAwaitSuccess> data result: {{ data }}</ng-container> \r\n    <ng-container *ngAwaitFailure=\"let error\"> error has occured: {{ error.message }}</ng-container>\r\n  </ng-container> -->\r\n\r\n  \r\n     \r\n   \r\n\r\n  <!-- <span *ngIf=\"(text$ | async) as text2\">\r\n    <ng-container [ngSwitch]=\"true\">\r\n      <ng-container *ngSwitchCase=\"text.loading\">loading data...</ng-container>\r\n      <ng-container *ngSwitchCase=\"text.success\">{{text.value}}</ng-container>\r\n      <ng-container *ngSwitchDefault>{{text.value.message}}</ng-container>\r\n    </ng-container>\r\n     \r\n  </span>\r\n\r\n  <ng-template #loadingText>loading...</ng-template> -->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/views/main/main.component.ts":
/*!**********************************************!*\
  !*** ./src/app/views/main/main.component.ts ***!
  \**********************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _aviellv_async_request_rxjs_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @aviellv/async-request-rxjs-pipe */ "./node_modules/@aviellv/async-request-rxjs-pipe/dist/index.js");
/* harmony import */ var _aviellv_async_request_rxjs_pipe__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_aviellv_async_request_rxjs_pipe__WEBPACK_IMPORTED_MODULE_3__);




var MainComponent = /** @class */ (function () {
    function MainComponent(http) {
        this.http = http;
        this.test = "test 123";
    }
    MainComponent.prototype.btnClick = function () {
        this.httpQuery$ = this.http.get("./api/text").pipe(Object(_aviellv_async_request_rxjs_pipe__WEBPACK_IMPORTED_MODULE_3__["asAsyncRequest"])());
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
    };
    MainComponent.prototype.ngOnInit = function () {
        //  this.text$ = this.http.get<string>("./api/text"); // AsyncRequest<string, HttpErrorResponse>(this.http.get<string>("./api/text"));
    };
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/views/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/views/main/main.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MainComponent);
    return MainComponent;
}());

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


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\avielaptop\Source\Repos\angular-mvc-webapi-starter\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map