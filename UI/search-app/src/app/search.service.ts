import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

 // ...existing code...
// ...existing code...
search(query: string): Observable<string> {
  return this.http.post(
    '/search', // Use relative path
    { query },
    { responseType: 'text' }
  );
}

}