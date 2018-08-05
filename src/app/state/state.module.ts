import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { StatePage } from './state.page';
import { SharedPageModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: StatePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SharedPageModule
  ],
  declarations: [StatePage]
})
export class StatePageModule {}
