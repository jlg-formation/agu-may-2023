import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncBtnComponent } from './async-btn.component';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';

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
});
