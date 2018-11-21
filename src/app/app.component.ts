import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <ul>
    <li>
      <a [routerLink]="['home']">Home</a>
    </li>

    <li>
      <a [routerLink]="['module1']">Module1 Child1</a>
    </li>

    <li>
      <a [routerLink]="['module1/child2']">Module1 Child2</a>
    </li>

    <li>
      <a [routerLink]="['module2']">Module2 Child1</a>
    </li>

    <router-outlet></router-outlet>
  </ul>
  `
})
export class AppComponent {
  title = 'ModularSample';
}
