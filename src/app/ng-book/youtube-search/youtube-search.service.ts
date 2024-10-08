import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { YOUTUBE_API_KEY, YOUTUBE_API_URL } from '../../injection-tokens';

@Injectable({
  providedIn: 'root',
})
export class YoutubeSearchService {
  constructor(
    private http: HttpClient,
    @Inject(YOUTUBE_API_KEY) apiKey: string,
    @Inject(YOUTUBE_API_URL) apiUrl: string
  ) {}
}
