import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, tap } from 'rxjs';
import { Article, NewArticle } from '../interfaces/article';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private articles: Article[] = [
    { id: 'a1', name: 'Tournevis', price: 2.99, qty: 123 },
    { id: 'a2', name: 'Marteau', price: 8, qty: 23 },
  ];

  articles$ = new BehaviorSubject<Article[]>(this.articles);

  constructor() {}

  add(newArticle: NewArticle): Observable<void> {
    return of(undefined).pipe(
      tap(() => {
        if (newArticle.name === 'Trucxxx') {
          throw new Error(`Oups... Trucxxx interdit...`);
        }
        const article: Article = { ...newArticle, id: generateId() };
        this.articles.push(article);
      })
    );
  }

  refresh(): Observable<void> {
    return of(undefined).pipe(
      tap(() => {
        this.articles$.next(this.articles);
      })
    );
  }

  remove(ids: string[]): Observable<void> {
    return of(undefined).pipe(
      tap(() => {
        this.articles = this.articles.filter((a) => !ids.includes(a.id));
      })
    );
  }
}

const generateId = (): string => {
  return (Math.random() * 1e12).toFixed(0);
};
