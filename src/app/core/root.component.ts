import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <p>coucou from app</p>
    <router-outlet></router-outlet>
  `
})
export class RootComponent {}
