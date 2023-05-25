import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncBtnComponent } from './async-btn.component';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';
import { throwError } from 'rxjs';

describe('AsyncBtnComponent', () => {
  let component: AsyncBtnComponent;
  let fixture: ComponentFixture<AsyncBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FontAwesomeTestingModule],
      declarations: [AsyncBtnComponent],
    });
    fixture = TestBed.createComponent(AsyncBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should run action', () => {
    component.run();
    expect(component).toBeTruthy();
  });

  it('should run action in error', () => {
    component.action = throwError(() => new Error('oups'));
    component.run();
    expect(component).toBeTruthy();
  });
});
