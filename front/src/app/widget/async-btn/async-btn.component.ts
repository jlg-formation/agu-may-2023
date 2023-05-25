import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  IconDefinition,
  faCircleNotch,
} from '@fortawesome/free-solid-svg-icons';
import { Observable, catchError, finalize, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-async-btn',
  templateUrl: './async-btn.component.html',
  styleUrls: ['./async-btn.component.scss'],
})
export class AsyncBtnComponent {
  @Input()
  icon: IconDefinition = faCircleNotch;

  @Input()
  title = '';

  @Input()
  action: Observable<void> = of(undefined);

  @Output()
  actionError = new EventEmitter<string>();

  isRunning = false;

  faCircleNotch = faCircleNotch;

  run() {
    of(undefined)
      .pipe(
        switchMap(() => {
          this.isRunning = true;
          this.actionError.emit('');
          return this.action;
        }),
        catchError((err) => {
          console.log('err: ', err);
          this.actionError.emit(err.message);
          return of(undefined);
        }),
        finalize(() => {
          this.isRunning = false;
        })
      )
      .subscribe();
  }
}
