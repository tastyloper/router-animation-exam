import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AComponent } from './components/a.component';
import { BComponent } from './components/b.component';

const routes: Routes = [
  { path: '', redirectTo: 'a', pathMatch: 'full' },
  { path: 'a', component: AComponent, data: {animation: 'main'} },
  { path: 'b', component: BComponent, data: {animation: 'main'} },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
