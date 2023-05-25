import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: 'input[appAutofocus]',
})
export class AutofocusDirective implements OnInit {
  @Input('appAutofocus')
  mode: 'select' | '' = '';

  constructor(private readonly elt: ElementRef<HTMLInputElement>) {}

  ngOnInit(): void {
    if (this.mode === 'select') {
      this.elt.nativeElement.select();
      return;
    }
    this.elt.nativeElement.focus();
  }
}
