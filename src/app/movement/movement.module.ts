import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MovementPage } from './movement.page';
import { MovementService } from './services/movement/movement.service';
import { MovementCardComponent } from './components/movement-card/movement-card.component';
import { MovementsListComponent } from './components/movements-list/movements-list.component';
import { AmountComponent } from './components/amount/amount.component';

const routes: Routes = [
  {
    path: '',
    component: MovementPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    MovementPage,
    MovementsListComponent,
    MovementCardComponent,
    AmountComponent
  ],
  providers: [
    MovementService
  ]
})
export class MovementPageModule {}
