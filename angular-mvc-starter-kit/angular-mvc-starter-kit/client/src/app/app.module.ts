import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MainComponent } from './views/main/main.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { DevInterceptor } from './services/dev-interceptor';
import { NgAwaitFailure, NgAwait, NgAwaitLoading, NgAwaitSuccess } from './directives/async.request.directive';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DashboardComponent,
    NgAwait,
    NgAwaitLoading,
    NgAwaitFailure,
    NgAwaitSuccess
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: DevInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
