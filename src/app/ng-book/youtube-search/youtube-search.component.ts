import { Component } from '@angular/core';
import { SearchResult } from './search-result/search-result.model';

@Component({
  selector: 'app-youtube-search',
  templateUrl: './youtube-search.component.html',
  styleUrl: './youtube-search.component.css',
})
export class YoutubeSearchComponent {
  loading: boolean;
  updateResults(results: SearchResult[]) {}
}
