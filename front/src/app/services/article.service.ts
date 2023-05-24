import { Injectable } from '@angular/core';
import { Article } from '../interfaces/article';
import { BehaviorSubject } from 'rxjs';

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
}
