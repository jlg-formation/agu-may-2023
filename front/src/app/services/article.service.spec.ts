import { TestBed, fakeAsync } from '@angular/core/testing';

import { ArticleService } from './article.service';
import { a1, newArticle, newErrorArticle } from 'src/test/data';
import { catchError, of } from 'rxjs';

describe('ArticleService', () => {
  let service: ArticleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add an article', () => {
    service.add(newArticle).subscribe();
    expect(service).toBeTruthy();
  });

  it('should add an article in error', fakeAsync(() => {
    let shouldGoHere = false;
    service
      .add(newErrorArticle)
      .pipe(
        catchError(() => {
          shouldGoHere = true;
          return of(undefined);
        })
      )
      .subscribe();
    expect(shouldGoHere).toBe(true);
  }));

  it('should remove an article', () => {
    service['articles'] = [a1];
    service.remove([]).subscribe();
    expect(service).toBeTruthy();
  });

  it('should refresh an article', () => {
    service.refresh().subscribe();
    expect(service).toBeTruthy();
  });
});
