import { Component } from '@angular/core';
import {
  faRotateRight,
  faPlus,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';
import { Article } from '../interfaces/article';
import { ArticleService } from '../services/article.service';
import { Observable, delay, of, switchMap, tap, throwError } from 'rxjs';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss'],
})
export class StockComponent {
  errorMsg = '';
  faPlus = faPlus;
  faRotateRight = faRotateRight;
  faTrashAlt = faTrashAlt;
  selectedArticles = new Set<Article>();

  constructor(protected articleService: ArticleService) {}

  refresh(): Observable<void> {
    return of(undefined).pipe(
      delay(300),
      switchMap(() => {
        return this.articleService.refresh();
      })
    );
  }

  remove(): Observable<void> {
    return of(undefined).pipe(
      delay(300),
      switchMap(() => {
        console.log('remove');
        const ids = [...this.selectedArticles].map((a) => a.id);
        return this.articleService.remove(ids);
      }),
      switchMap(() => {
        return this.articleService.refresh();
      }),
      tap(() => {
        this.selectedArticles.clear();
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
