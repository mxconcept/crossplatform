import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Lab5Page } from './lab5.page';

const routes: Routes = [
  {
    path: '',
    component: Lab5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Lab5PageRoutingModule {}
