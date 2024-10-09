import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { YOUTUBE_API_KEY, YOUTUBE_API_URL } from '../../injection-tokens';
import { Observable } from 'rxjs';
import { SearchResult } from './search-result/search-result.model';

@Injectable({
  providedIn: 'root',
})
export class YoutubeSearchService {
  results: SearchResult[];

  constructor(
    private http: HttpClient,
    @Inject(YOUTUBE_API_KEY) private apiKey: string,
    @Inject(YOUTUBE_API_URL) private apiUrl: string
  ) {}

  search(query: string): Observable<SearchResult[]> {
    return new Observable<SearchResult[]>((observer) => {
      this.http
        .get<any>(this.apiUrl, {
          params: {
            q: query,
            key: this.apiKey,
            part: 'snippet',
            type: 'video',
            maxResults: 10,
          },
        })
        .subscribe({
          next: (response) => {
            const results: SearchResult[] = response.items.map((item: any) => {
              return new SearchResult({
                id: item.id.videoId,
                title: item.snippet.title,
                description: item.snippet.description,
                thumbnailUrl: item.snippet.thumbnails.high.url,
              });
            });
            // Emit the search results
            observer.next(results);

            // Complete the observable
            observer.complete();
          },
          error: (err) => {
            // Handle errors by emitting the error
            observer.error(err);
          },
        });
    });
  }
}
