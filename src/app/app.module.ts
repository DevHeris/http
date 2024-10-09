import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgBookComponent } from './ng-book/ng-book.component';
import { DocsComponent } from './docs/docs.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { SimpleHttpComponent } from './ng-book/simple-http/simple-http.component';

import { SearchResultComponent } from './ng-book/youtube-search/search-result/search-result.component';
import { YOUTUBE_API_KEY, YOUTUBE_API_URL } from './injection-tokens';
import { YoutubeSearchService } from './ng-book/youtube-search/youtube-search.service';
import { SearchBoxComponent } from './ng-book/youtube-search/search-box/search-box.component';
import { YoutubeSearchComponent } from './ng-book/youtube-search/youtube-search.component';

@NgModule({
  declarations: [
    AppComponent,
    NgBookComponent,
    DocsComponent,
    SimpleHttpComponent,
    YoutubeSearchComponent,
    SearchResultComponent,
    SearchBoxComponent,
  ],
  imports: [BrowserModule],
  providers: [
    provideHttpClient(withFetch()),
    {
      provide: YOUTUBE_API_KEY,
      useValue: 'AIzaSyAwwp8rqPGhKByY5wu8JcLXFMjlAl13PRA',
    },
    {
      provide: YOUTUBE_API_URL,
      useValue: 'https://www.googleapis.com/youtube/v3/search',
    },
    { provide: YoutubeSearchService, useClass: YoutubeSearchService },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
