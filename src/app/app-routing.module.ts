import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostComponent }   from './post/post.component';
import { PostsComponent }  from './posts/posts.component';
import { LoginComponent }  from './login/login.component';
import { NotFoundComponent }  from './not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'post/:id', component: PostComponent },
  { path: 'posts', component: PostsComponent },
  { path: '**',  component: NotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
