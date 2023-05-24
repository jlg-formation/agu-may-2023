import { Component } from '@angular/core';
import {
  faRotateRight,
  faPlus,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';
import { Article } from '../interfaces/article';
import { ArticleService } from '../services/article.service';
import { Observable, delay, of, tap, throwError } from 'rxjs';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss'],
})
export class StockComponent {
  faPlus = faPlus;
  faRotateRight = faRotateRight;
  faTrashAlt = faTrashAlt;
  selectedArticles = new Set<Article>();
  errorMsg = '';

  constructor(protected articleService: ArticleService) {}

  remove(): Observable<void> {
    return of(undefined).pipe(
      delay(2000),
      tap(() => {
        console.log('remove');
        throw new Error('Suppression impossible');
      })
    );
  }

  select(a: Article) {
    if (this.selectedArticles.has(a)) {
      this.selectedArticles.delete(a);
      return;
    }
    this.selectedArticles.add(a);
  }

  setErrorMsg(errorMsg: string) {
    this.errorMsg = errorMsg;
  }
}
