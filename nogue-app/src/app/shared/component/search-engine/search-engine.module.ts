import { NgModule } from '@angular/core';
import { SearchEngineComponent } from './search-engine.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/primeng';

@NgModule({
  declarations: [
    SearchEngineComponent
  ],
  exports: [
    SearchEngineComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule
  ]
})
export class SearchEngineModule {

}
