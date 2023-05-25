import { TestBed, fakeAsync } from '@angular/core/testing';

import { HttpArticleService, url } from './http-article.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('HttpArticleService', () => {
  let service: HttpArticleService;
  let ctrl: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(HttpArticleService);
    ctrl = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    ctrl.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should refresh', fakeAsync(() => {
    service.refresh().subscribe();
    const req = ctrl.expectOne(url);
    expect(req.request.method).toEqual('GET');
    req.flush([]);
    expect(service).toBeTruthy();
  }));
});
