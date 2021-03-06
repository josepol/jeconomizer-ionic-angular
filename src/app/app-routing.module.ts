import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'Movement', loadChildren: './movement/movement.module#MovementPageModule' },
  { path: 'State', loadChildren: './state/state.module#StatePageModule' },  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' }


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
