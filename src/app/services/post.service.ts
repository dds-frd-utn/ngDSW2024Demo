import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostExt } from '../models/post.model';

const baseUrl = 'https://dummyjson.com/posts?limit=10';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<PostExt> {
    return this.http.get<PostExt>(baseUrl);
  }
}
