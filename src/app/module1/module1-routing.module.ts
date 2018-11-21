import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Child1Component } from './component/child1/child1.component';
import { Child2Component } from './component/child2/child2.component';

const routes: Routes = [
  { path: '', redirectTo: 'child1', pathMatch: 'full', },
  { path: 'child1', component: Child1Component },
  { path: 'child2', component: Child2Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module1RoutingModule { }
