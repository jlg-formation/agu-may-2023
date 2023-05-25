import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { AutofocusDirective } from './autofocus.directive';

@Component({
  selector: 'app-test',
  template: '<input type="text" appAutofocus />',
})
export class TestComponent {}

@Component({
  selector: 'app-test',
  template: '<input type="text" appAutofocus="select" value="coucou" />',
})
export class TestSelectComponent {}

describe('AutofocusDirective', () => {
  it('should focus', () => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, AutofocusDirective],
    });
    const fixture = TestBed.createComponent(TestComponent);

    fixture.detectChanges();
    const focusElement = window.document.activeElement;
    const compiled = fixture.nativeElement as HTMLElement;
    const inputElement = compiled.querySelector('input');

    expect(focusElement).toBe(inputElement);
  });

  it('should select', () => {
    TestBed.configureTestingModule({
      declarations: [TestSelectComponent, AutofocusDirective],
    });
    const fixture = TestBed.createComponent(TestSelectComponent);

    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const elt = compiled.querySelector('input');
    if (elt === null) {
      throw new Error('not good');
    }
    const start = elt.selectionStart || 0;
    const end = elt.selectionEnd || 0;
    const str = elt.value.substring(start, end);

    expect(str).toBe('coucou');
  });
});
