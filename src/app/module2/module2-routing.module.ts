import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Child3Component } from './component/child3/child3.component';

const routes: Routes = [
  { path: '', redirectTo: 'child3', pathMatch: 'full', },
  { path: 'child3', component: Child3Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module2RoutingModule { }
