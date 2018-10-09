import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FloatingButtonComponent } from './components/floating-button/floating-button.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigationService } from './services/navigation/navigation.service';
import { SimpleHeaderComponent } from './components/simple-header/simple-header.component';
import { HttpService } from './services/http/http.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [
    FloatingButtonComponent,
    HeaderComponent,
    SimpleHeaderComponent
  ],
  exports: [
    FloatingButtonComponent,
    HeaderComponent,
    SimpleHeaderComponent
  ]
})
export class SharedPageModule {
  static forRoot(): ModuleWithProviders {
    return {
        ngModule: SharedPageModule,
        providers: [
          NavigationService,
          HttpService
        ]
    };
}
}
