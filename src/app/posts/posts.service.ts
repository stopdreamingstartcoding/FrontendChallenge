import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Post } from '../post/post';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { HttpErrorHandler, HandleError } from '../http-error-handler.service';

@Injectable()
export class PostsService {

  postsUrl = 'http://jsonplaceholder.typicode.com/posts';
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('HeroesService');
  }

  getPosts(): Observable<Post[]> {
       return this.http.get<Post[]>(this.postsUrl)
          .pipe(
            catchError(this.handleError('getPosts', []))
          );
     }
}
