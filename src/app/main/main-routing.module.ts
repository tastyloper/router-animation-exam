import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main.component';
import { AComponent } from '../components/a.component';
import { BComponent } from '../components/b.component';

const routes: Routes = [
  { path: '', redirectTo: 'a', pathMatch: 'full' },
  { path: 'a', component: MainComponent, data: {animation: 'main'}, children: [
    { path: '', component: AComponent }
  ] },
  { path: 'b', component: MainComponent, data: {animation: 'main'}, children: [
    { path: '', component: BComponent }
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {}
