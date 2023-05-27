import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Lab5PageRoutingModule } from './lab5-routing.module';

import { Lab5Page } from './lab5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Lab5PageRoutingModule
  ],
  declarations: [Lab5Page]
})
export class Lab5PageModule {}
