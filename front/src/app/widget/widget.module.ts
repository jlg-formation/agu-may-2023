import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsyncBtnComponent } from './async-btn/async-btn.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [AsyncBtnComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [AsyncBtnComponent],
})
export class WidgetModule {}
