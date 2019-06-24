import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
    <app-title></app-title>
    <router-outlet></router-outlet>
  `
})
export class MainComponent {}
