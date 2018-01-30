import {Injectable} from '@angular/core'
import {HttpClient, HttpRequest} from '@angular/common/http'

import {Observable} from 'rxjs/Observable'

@Injectable()
export class UploadService {
  constructor(private http: HttpClient){}

  upload(data: FormData): Observable<any>{
    const request = new HttpRequest('POST', 'http://localhost:3000/upload', data, {
      reportProgress: true,
    });
    return this.http.request<any>(request)
  }
}
