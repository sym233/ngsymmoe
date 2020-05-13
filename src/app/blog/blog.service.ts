import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { BlogIndex } from './blogIndex';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  getBlogIndex(): Observable<BlogIndex> {
    return this.http.get<BlogIndex>('api/blogIndex');
  }

  getBlog(id: string): Observable<string> {
    return this.http.get<string>(`api/blog_${id}`);
  }
}
