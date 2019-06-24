import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';

import { MainComponent } from './main.component';
import { TitleComponent } from '../components/title.component';
import { AComponent } from '../components/a.component';
import { BComponent } from '../components/b.component';

@NgModule({
  declarations: [
    MainComponent,
    TitleComponent,
    AComponent,
    BComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ],
  exports: [
    MainComponent,
    TitleComponent,
    AComponent,
    BComponent
  ]
})
export class MainModule { }
