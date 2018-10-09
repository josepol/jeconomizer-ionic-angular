import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MovementPage } from './movement.page';
import { MovementService } from './services/movement/movement.service';
import { MovementCardComponent } from './components/movement-card/movement-card.component';
import { MovementsListComponent } from './components/movements-list/movements-list.component';
import { AmountComponent } from './components/amount/amount.component';
import { SharedPageModule } from '../shared/shared.module';
import { CreateMovementComponent } from './containers/create-movement/create-movement.component';

const routes: Routes = [
  {
    path: '',
    component: MovementPage
  },
  {
    path: 'create-movement',
    component: CreateMovementComponent
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
  declarations: [
    MovementPage,
    MovementsListComponent,
    MovementCardComponent,
    AmountComponent,
    CreateMovementComponent
  ],
  providers: [
    MovementService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MovementPageModule {}
