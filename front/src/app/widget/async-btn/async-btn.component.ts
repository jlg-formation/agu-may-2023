import { Component, Input } from '@angular/core';
import {
  IconDefinition,
  faCircleNotch,
} from '@fortawesome/free-solid-svg-icons';
import { Observable, finalize, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-async-btn',
  templateUrl: './async-btn.component.html',
  styleUrls: ['./async-btn.component.scss'],
})
export class AsyncBtnComponent {
  @Input()
  icon: IconDefinition = faCircleNotch;

  @Input()
  title: string = '';

  @Input()
  action: Observable<void> = of(undefined);

  isRunning = false;

  run() {
    of(undefined)
      .pipe(
        switchMap(() => {
          this.isRunning = true;
          return this.action;
        }),
        finalize(() => {
          this.isRunning = false;
        })
      )
      .subscribe();
  }
}
