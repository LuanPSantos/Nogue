import { NgModule } from '@angular/core';
import { SearchEngineComponent } from './search-engine.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    SearchEngineComponent
  ],
  exports: [
    SearchEngineComponent
  ],
  imports: [
    IonicModule,
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class SearchEngineModule {

}
