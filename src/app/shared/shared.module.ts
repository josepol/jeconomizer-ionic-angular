import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { FloatingButtonComponent } from './components/floating-button/floating-button.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [
    FloatingButtonComponent,
    HeaderComponent
  ],
  exports: [
    FloatingButtonComponent,
    HeaderComponent
  ]
})
export class SharedPageModule {
  static forRoot(): ModuleWithProviders {
    return {
        ngModule: SharedPageModule,
        providers: [
        ]
    };
}
}
