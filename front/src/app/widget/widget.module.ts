import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsyncBtnComponent } from './async-btn/async-btn.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AutofocusDirective } from './autofocus.directive';

@NgModule({
  declarations: [AsyncBtnComponent, AutofocusDirective],
  imports: [CommonModule, FontAwesomeModule],
  exports: [AsyncBtnComponent, AutofocusDirective],
})
export class WidgetModule {}
