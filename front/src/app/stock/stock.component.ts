import { Component } from '@angular/core';
import {
  faRotateRight,
  faPlus,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';
import { Article } from '../interfaces/article';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss'],
})
export class StockComponent {
  faRotateRight = faRotateRight;
  faPlus = faPlus;
  faTrashAlt = faTrashAlt;

  constructor(protected articleService: ArticleService) {}
}
