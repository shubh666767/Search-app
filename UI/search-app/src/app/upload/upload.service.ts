import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  constructor(private http: HttpClient) {}

  uploadFile(file: File): Observable<any> {
  const formData = new FormData();
  formData.append('file', file);
  const url = '/upload';
  console.log(`Uploading to backend URL: ${url}`);
  return this.http.post(url, formData, { responseType: 'text' });
}

}
