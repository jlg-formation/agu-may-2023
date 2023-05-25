import { Component, OnInit } from '@angular/core';
import {
  faCircleNotch,
  faPlus,
  faRotateRight,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';
import { Observable, catchError, delay, of, switchMap, tap } from 'rxjs';
import { Article } from '../interfaces/article';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss'],
})
export class StockComponent implements OnInit {
  errorMsg = '';
  faCircleNotch = faCircleNotch;
  faPlus = faPlus;
  faRotateRight = faRotateRight;
  faTrashAlt = faTrashAlt;
  selectedArticles = new Set<Article>();

  constructor(protected articleService: ArticleService) {}

  ngOnInit(): void {
    if (this.articleService.articles$.value === undefined) {
      this.load().subscribe();
    }
  }

  load(): Observable<void> {
    return of(undefined).pipe(
      tap(() => {
        this.setErrorMsg('');
      }),
      delay(300),
      switchMap(() => {
        return this.articleService.refresh();
      }),
      catchError((err) => {
        this.setErrorMsg(err.message);
        return of(undefined);
      })
    );
  }

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
