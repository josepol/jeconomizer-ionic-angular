import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTabsComponent } from './containers/add-tabs/add-tabs.component';
import { AddMovementPage } from './containers/add-movement/add-movement.page';
import { AddCategoryComponent } from './containers/add-category/add-category.component';

const routes: Routes = [
    {
      path: 'add',
      component: AddTabsComponent,
      children: [
        {
          path: 'movement',
          outlet: 'movement',
          component: AddMovementPage
        },
        {
          path: 'category',
          outlet: 'category',
          component: AddCategoryComponent
        }
      ]
    },
    {
      path: '',
      redirectTo: '/add/(movement:movement)',
      pathMatch: 'full'
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovementRoutingModule {}
