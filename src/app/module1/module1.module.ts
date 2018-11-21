import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module1RoutingModule } from './module1-routing.module';
import { Child1Component } from './component/child1/child1.component';
import { Child2Component } from './component/child2/child2.component';

@NgModule({
  imports: [
    CommonModule,
    Module1RoutingModule
  ],
  declarations: [
    Child1Component,
    Child2Component
  ]
})
export class Module1Module { }
