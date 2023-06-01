import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Lab7PageRoutingModule } from './lab7-routing.module';

import { Lab7Page } from './lab7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Lab7PageRoutingModule
  ],
  declarations: [Lab7Page]
})
export class Lab7PageModule {}
