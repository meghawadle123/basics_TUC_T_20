import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductComponent } from './shared/component/product/product.component';
import { ProductsComponent } from './shared/component/products/products.component';
import { User } from './shared/component/user/user.component';
import { Users } from './shared/component/users/users.component';
import { CommentComponent } from './shared/component/comment/comment.component';
import { CommentsComponents } from './shared/component/comments/comments.component';
import { PostcComponent } from './shared/component/post/post.component';
import { ImagesComponent } from './shared/component/images/images.component';
import { CommentList } from './shared/component/comment_list/comment_list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductsComponent,
    User,
    Users,
    CommentComponent,
    CommentsComponents,
    PostcComponent,
     ImagesComponent,
     CommentList
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
