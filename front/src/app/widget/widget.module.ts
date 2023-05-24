import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsyncBtnComponent } from './async-btn/async-btn.component';



@NgModule({
  declarations: [
    AsyncBtnComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AsyncBtnComponent
  ]
})
export class WidgetModule { }
