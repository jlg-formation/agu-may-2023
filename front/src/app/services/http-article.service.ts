import { Injectable } from '@angular/core';
import { ArticleService } from './article.service';
import { Observable, catchError, map, of, switchMap, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Article, NewArticle } from '../interfaces/article';
import { environment } from 'src/environments/environment';

const url = environment.articleApiOrigin + '/api/articles';

@Injectable({
  providedIn: 'root',
})
export class HttpArticleService extends ArticleService {
  constructor(private http: HttpClient) {
    super();
    console.log('http article instantiated');
  }

  override refresh(): Observable<void> {
    return of(undefined).pipe(
      switchMap(() => {
        return this.http.get<Article[]>(url);
      }),
      catchError((err) => {
        console.log('err: ', err);
        throw new Error('Erreur Technique');
      }),
      map((articles) => {
        this.articles$.next(articles);
        return;
      })
    );
  }

  override add(newArticle: NewArticle): Observable<void> {
    return of(undefined).pipe(
      switchMap(() => {
        return this.http.post<void>(url, newArticle);
      }),
      catchError((err) => {
        console.log('err: ', err);
        throw new Error('Erreur Technique');
      })
    );
  }

  override remove(ids: string[]): Observable<void> {
    return of(undefined).pipe(
      switchMap(() => {
        return this.http.delete<void>(url, {
          body: ids,
        });
      }),
      catchError((err) => {
        console.log('err: ', err);
        throw new Error('Erreur Technique');
      })
    );
  }
}
