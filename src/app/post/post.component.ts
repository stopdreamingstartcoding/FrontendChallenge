import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PostService } from './post.service';
import { Post } from './post';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.less']
})
export class PostComponent implements OnInit {

  id:string;
  post:Post;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private postService: PostService) { }


  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getPost(this.id);
  }

  goBack(): void {
  this.location.back();
}

getPost(id): void {
  this.postService.getPost(id)
    .subscribe(post => { this.post=post; this.post.userId='User123'})
}


}
