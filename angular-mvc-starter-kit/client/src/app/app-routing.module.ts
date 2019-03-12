import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './views/main/main/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/my/route/main', pathMatch: 'full' },
  { path: 'my/route/main', component: MainComponent },
  { path: 'my/route/dashboard', component: DashboardComponent },
 
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true})],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
