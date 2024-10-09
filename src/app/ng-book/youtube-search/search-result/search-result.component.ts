import { Component, Input } from '@angular/core';
import { SearchResult } from './search-result.model';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrl: './search-result.component.css',
})
export class SearchResultComponent {
  @Input() result: SearchResult;
}
