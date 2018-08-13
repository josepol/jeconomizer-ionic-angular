import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MovementPage } from './movement.page';
import { MovementService } from './services/movement/movement.service';
import { MovementCardComponent } from './components/movement-card/movement-card.component';
import { MovementsListComponent } from './components/movements-list/movements-list.component';
import { AmountComponent } from './components/amount/amount.component';
import { SharedPageModule } from '../shared/shared.module';
import { AddMovementPage } from './containers/add-movement/add-movement.page';
import { AddAmountFormComponent } from './components/add-amount-form/add-amount-form.component';
import { AddCategoryComponent } from './containers/add-category/add-category.component';
import { AddTabsComponent } from './containers/add-tabs/add-tabs.component';
import { MovementRoutingModule } from './movement-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MovementRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SharedPageModule
  ],
  declarations: [
    MovementPage,
    MovementsListComponent,
    MovementCardComponent,
    AmountComponent,
    AddMovementPage,
    AddAmountFormComponent,
    AddCategoryComponent,
    AddTabsComponent
  ],
  providers: [
    MovementService
  ]
})
export class MovementPageModule {}
