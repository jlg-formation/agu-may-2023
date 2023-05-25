import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsyncBtnComponent } from './async-btn/async-btn.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AutofocusDirective } from './autofocus.directive';
import { EllipsisPipe } from './ellipsis.pipe';

@NgModule({
  declarations: [AsyncBtnComponent, AutofocusDirective, EllipsisPipe],
  imports: [CommonModule, FontAwesomeModule],
  exports: [AsyncBtnComponent, AutofocusDirective, EllipsisPipe],
})
export class WidgetModule {}
