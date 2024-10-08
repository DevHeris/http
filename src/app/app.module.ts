import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgBookComponent } from './ng-book/ng-book.component';
import { DocsComponent } from './docs/docs.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { SimpleHttpComponent } from './ng-book/simple-http/simple-http.component';
import { YoutubeSearchComponent } from './ng-book/youtube-search/youtube-search.component';
import { SearchResultComponent } from './ng-book/youtube-search/search-result/search-result.component';
import { YOUTUBE_API_KEY, YOUTUBE_API_URL } from './injection-tokens';

@NgModule({
  declarations: [
    AppComponent,
    NgBookComponent,
    DocsComponent,
    SimpleHttpComponent,
    YoutubeSearchComponent,
    SearchResultComponent,
  ],
  imports: [BrowserModule],
  providers: [
    provideHttpClient(withFetch()),
    {
      provide: YOUTUBE_API_KEY,
      useValue: 'AIzaSyDOfT_BO81aEZScosfTYMruJobmpjqNeEk',
    },
    {
      provide: YOUTUBE_API_URL,
      useValue: 'https://www.googleapis.com/youtube/v3/search',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
