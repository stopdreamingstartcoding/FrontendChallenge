import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Post } from './post';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { HttpErrorHandler, HandleError } from '../http-error-handler.service';

@Injectable()
export class PostService {

  postsUrl = 'http://jsonplaceholder.typicode.com/posts';
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('HeroesService');
  }

     getPost(id: number): Observable<Post> {
       const url = `${this.postsUrl}/${id}`;
       return this.http.get<Post>(url).pipe(
         catchError(this.handleError<Post>(`getPost id=${id}`))
       );
     }
}
