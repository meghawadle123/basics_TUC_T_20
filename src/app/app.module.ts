import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductComponent } from './shared/component/product/product.component';
import { ProductsComponent } from './shared/component/products/products.component';
import { User } from './shared/component/user/user.component';
import { Users } from './shared/component/users/users.component';
import { CommentComponent } from './shared/component/comment/comment.component';
import { CommentsComponents } from './shared/component/comments/comments.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductsComponent,
    User,
    Users,
    CommentComponent,
    CommentsComponents
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
