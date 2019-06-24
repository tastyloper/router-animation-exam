import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  template: `
    <app-title></app-title>
    <app-container></app-container>
  `,
  styles: []
})
export class ContainerComponent {}
