import {
  Component,
  ElementRef,
  EventEmitter,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { SearchResult } from '../search-result/search-result.model';
import { YoutubeSearchService } from '../youtube-search.service';
import { debounceTime, filter, fromEvent, map, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css',
})
export class SearchBoxComponent implements OnInit {
  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output() results: EventEmitter<SearchResult[]> = new EventEmitter<
    SearchResult[]
  >();

  constructor(private youtube: YoutubeSearchService, private el: ElementRef) {}

  ngOnInit(): void {
    // convert the 'keyup' event to an observable stream
    fromEvent(this.el.nativeElement, 'keyup')
      // chain operators
      .pipe(
        // extract the value of the input
        map((e: any) => e.target.value),
        // filter out if empty
        filter((text: string) => text.length > 1),
        // only once every 250ms
        debounceTime(250),
        // enable loading
        tap(() => this.loading.emit(true)),
        // search, discarding old events if new input come in
        switchMap((query: string) => this.youtube.search(query))
      )
      // act on the return of the search
      .subscribe((res) => console.log(res));
  }
}
