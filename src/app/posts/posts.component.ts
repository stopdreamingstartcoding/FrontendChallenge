import { Component, OnInit, Inject } from '@angular/core';
import {SESSION_STORAGE, WebStorageService} from 'angular-webstorage-service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Post } from '../post/post';
import { PostsService } from './posts.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.less']
})
export class PostsComponent implements OnInit {

  constructor(
    @Inject(SESSION_STORAGE) private storage: WebStorageService,
    private router: Router,
    private postsService: PostsService) { }

  posts:Post[]=[];

  ngOnInit() {
    this.getPostsAndDsc();

    $(document).ready(function(){
      $("#myInput").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $(".postSerchHelper").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
      });
    });

  }

  logOut() {
    this.storage.set("userName", null);
    this.router.navigate([''], {});
  }

  getPostsAndDsc(): void {

    this.postsService.getPosts()
      .subscribe(posts => {
        Observable.interval(1000)
        .take(posts.length)
        .subscribe((i) => { this.posts.push(posts[posts.length-i-1]);});
    })
  }

}
