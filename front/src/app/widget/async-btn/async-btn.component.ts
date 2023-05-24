import { Component, Input } from '@angular/core';
import {
  IconDefinition,
  faCircleNotch,
} from '@fortawesome/free-solid-svg-icons';
import { Observable, of } from 'rxjs';

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
}
