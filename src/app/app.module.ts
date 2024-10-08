import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgBookComponent } from './ng-book/ng-book.component';
import { DocsComponent } from './docs/docs.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { SimpleHttpComponent } from './ng-book/simple-http/simple-http.component';

@NgModule({
  declarations: [
    AppComponent,
    NgBookComponent,
    DocsComponent,
    SimpleHttpComponent,
  ],
  imports: [BrowserModule],
  providers: [provideHttpClient(withFetch())],
  bootstrap: [AppComponent],
})
export class AppModule {}
