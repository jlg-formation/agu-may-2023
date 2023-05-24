import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent {
  f = new FormGroup({
    name: new FormControl('Truc', [
      Validators.required,
      Validators.maxLength(10),
      Validators.minLength(3),
    ]),
    price: new FormControl(0, [Validators.required, Validators.min(0)]),
    qty: new FormControl(0, [Validators.required, Validators.min(0)]),
  });
  faPlus = faPlus;

  constructor(private router: Router, private route: ActivatedRoute) {
    console.log('router: ', router);
  }

  submit() {
    console.log('submit');
    this.router.navigate(['..'], { relativeTo: this.route });
  }
}
