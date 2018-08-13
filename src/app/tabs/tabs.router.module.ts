import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { MovementPage } from '../movement/movement.page';
import { StatePage } from '../state/state.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'movement',
        outlet: 'movement',
        component: MovementPage
      },
      {
        path: 'state',
        outlet: 'state',
        component: StatePage
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/(movement:movement)',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
