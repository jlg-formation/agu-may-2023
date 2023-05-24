import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { faCircleNotch, faPlus } from '@fortawesome/free-solid-svg-icons';
import { finalize, of, switchMap } from 'rxjs';
import { NewArticle } from 'src/app/interfaces/article';
import { ArticleService } from 'src/app/services/article.service';

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
  faCircleNotch = faCircleNotch;
  faPlus = faPlus;
  isAdding = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) {
    console.log('router: ', router);
  }

  submit() {
    of(undefined)
      .pipe(
        switchMap(() => {
          console.log('submit');
          this.isAdding = true;
          const newArticle = this.f.value as NewArticle;
          return this.articleService.add(newArticle);
        }),
        switchMap(() => {
          return this.articleService.refresh();
        }),
        switchMap(() => {
          return this.router.navigate(['..'], { relativeTo: this.route });
        }),
        finalize(() => {
          this.isAdding = false;
        })
      )
      .subscribe();
  }
}
