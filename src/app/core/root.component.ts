import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <div style="min-height: 75vh;">
    <router-outlet></router-outlet>
    </div>
    <app-footer></app-footer>
  `,
})
export class RootComponent {}
