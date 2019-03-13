import { Directive, Input, ViewContainerRef, TemplateRef, Host, DoCheck } from "@angular/core";
import { Observable, throwError, Subscription } from "rxjs";
import { catchError, take, map } from "rxjs/operators";
import { AsyncRequest, asAsyncRequest } from "@aviellv/async-request-rxjs-pipe";

interface IAwaitView {
    destroyView(): void;
}

interface IAwaitLoadingView extends IAwaitView {
    createView();
}

interface IAwaitFailureView<TError> extends IAwaitView {
    createView(value: TError);
}

interface IAwaitSuccessView<TValue> extends IAwaitView {
    createView(value: TValue);
}


@Directive({ selector: '[ngAwait]' })
export class NgAwait<TValue, TError> {

    private activeView: IAwaitView;

    private awaitLoadingView: IAwaitLoadingView;
    private awaitSuccessView: IAwaitSuccessView<TValue>;
    private awaitFailureView: IAwaitFailureView<TError>;

    private _requestSubscription: Subscription;
    private _request: Observable<AsyncRequest<TValue, TError>>;


    private setActiveView(view: IAwaitView) {
        if (this.activeView !== view) {
            if (this.activeView)
                this.activeView.destroyView();
            this.activeView = view;
        }
    }

    @Input()
    set ngAwait(request: Observable<TValue>) {
        this.setRequest(request);
    }



    private onRequestState(requestState: AsyncRequest<TValue, TError>) {
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

    }

    private setRequest(request: Observable<TValue>) {
        if (this._requestSubscription)
            this._requestSubscription.unsubscribe();

        this.setActiveView(null);
        this._request = request.pipe(asAsyncRequest<TValue, TError>());
        this._requestSubscription = this._request.subscribe(req => this.onRequestState(req));
    }

    _setAwaitSuccess(view: IAwaitSuccessView<TValue>) {
        this.awaitSuccessView = view;
    }

    _setAwaitFailure(view: IAwaitFailureView<TError>) {
        this.awaitFailureView = view;
    }

    _setAwaitLoading(view: IAwaitLoadingView) {
        this.awaitLoadingView = view;
    }


}

@Directive({ selector: '[ngAwaitLoading]' })
export class NgAwaitLoading<TValue, TError> implements IAwaitLoadingView {

    createView() {
        this.viewContainer.createEmbeddedView(this.templateRef);
    }
    destroyView(): void {
        this.viewContainer.clear();
    }

    constructor(private viewContainer: ViewContainerRef,
        private templateRef: TemplateRef<any>,
        @Host() ngAsyncAwait: NgAwait<TValue, TError>) {

        ngAsyncAwait._setAwaitLoading(this);
    }
}

@Directive({ selector: '[ngAwaitSuccess]' })
export class NgAwaitSuccess<TValue, TError> implements IAwaitSuccessView<TValue> {

    createView(value: TValue) {
        this.viewContainer.createEmbeddedView(this.templateRef, { $implicit: value, ngAwaitSuccess: value });
    }
    destroyView(): void {
        this.viewContainer.clear();
    }

    @Input()
    set ngAwaitFailure(context: any) {
    }

    constructor(private viewContainer: ViewContainerRef,
        private templateRef: TemplateRef<any>,
        @Host() ngAsyncAwait: NgAwait<TValue, TError>) {

        ngAsyncAwait._setAwaitSuccess(this);
    }
}


@Directive({ selector: '[ngAwaitFailure]' })
export class NgAwaitFailure<TValue, TError> implements IAwaitFailureView<TError> {

    createView(value: TError) {
        this.viewContainer.createEmbeddedView(this.templateRef, { $implicit: value, ngAwaitFailure: value });
    }
    destroyView(): void {
        this.viewContainer.clear();
    }

    @Input()
    set ngAwaitFailure(context: any) {
    }

    constructor(private viewContainer: ViewContainerRef,
        private templateRef: TemplateRef<any>,
        @Host() ngAsyncAwait: NgAwait<TValue, TError>) {

        ngAsyncAwait._setAwaitFailure(this);
    }
}
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