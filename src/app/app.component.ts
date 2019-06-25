import { Component } from '@angular/core';
import { fadeAnimation } from './core/animation/fade.animation';
import { routerTransition } from './core/animation/transition-animation';
import { routerfadeinout } from './core/animation/fadeinout-animation';

@Component({
  selector: 'app-root',
  animations: [fadeAnimation, routerTransition, routerfadeinout],
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">
            <a class="nav-link" routerLink="/a">A</a>
          </li>
          <li class="nav-item" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">
            <a class="nav-link" routerLink="/b">B</a>
          </li>
        </ul>
      </div>
    </nav>
    <main [@fadeAnimation]="getRouterOutletState(outlet)">
      <router-outlet #outlet="outlet"></router-outlet>
    </main>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public getRouterOutletState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
}
