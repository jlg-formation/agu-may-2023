import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';

import { StockComponent } from './stock.component';
import { WidgetModule } from '../widget/widget.module';
import { throwError } from 'rxjs';
import { a1 } from 'src/test/data';
import { Article } from '../interfaces/article';

describe('StockComponent', () => {
  let component: StockComponent;
  let fixture: ComponentFixture<StockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [WidgetModule, FontAwesomeTestingModule],
      declarations: [StockComponent],
    });
    fixture = TestBed.createComponent(StockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load', fakeAsync(() => {
    component.load().subscribe();
    tick(300);
    expect(component).toBeTruthy();
  }));

  it('should load in error', fakeAsync(() => {
    component['articleService'].refresh = () => {
      return throwError(() => {
        return new Error('oups');
      });
    };
    component.load().subscribe();
    tick(300);
    expect(component).toBeTruthy();
  }));

  it('should refresh', fakeAsync(() => {
    component.refresh().subscribe();
    tick(300);
    expect(component).toBeTruthy();
  }));

  it('should remove', fakeAsync(() => {
    component.selectedArticles = new Set<Article>([a1]);
    component.remove().subscribe();
    tick(300);
    expect(component).toBeTruthy();
  }));

  it('should select', fakeAsync(() => {
    component.selectedArticles = new Set<Article>([]);
    component.select(a1);
    expect(component.selectedArticles.has(a1)).toBe(true);
  }));

  it('should unselect', fakeAsync(() => {
    component.selectedArticles = new Set<Article>([a1]);
    component.select(a1);
    expect(component.selectedArticles.has(a1)).toBe(false);
  }));
});
