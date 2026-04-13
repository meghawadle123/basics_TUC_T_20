import { Component } from "@angular/core";



@Component({
    selector:"app-comment",
    templateUrl:"./comment.component.html",
    styleUrls:["comment.component.scss"]
})
export class CommentComponent{
  comment = {
  name: "John Doe",
  email: "john@example.com",
  body: "This is a sample comment"
};
}