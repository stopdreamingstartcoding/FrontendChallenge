import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PostsComponent } from './posts/posts.component';
import { StorageServiceModule} from 'angular-webstorage-service';
import { AppRoutingModule } from './/app-routing.module';
import { PostComponent } from './post/post.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PostsService } from './posts/posts.service';
import { PostService } from './post/post.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpErrorHandler } from './http-error-handler.service';
import { MessageService }       from './message.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PostsComponent,
    PostComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    StorageServiceModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PostsService, PostService, HttpErrorHandler, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
