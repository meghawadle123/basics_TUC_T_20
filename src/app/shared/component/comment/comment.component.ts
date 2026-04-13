import { Component } from "@angular/core";



@Component({
    selector:"app-comment",
    templateUrl:"./comment.component.html",
    styleUrls:["comment.component.scss"]
})
export class CommentComponent{
   author:string= "ketaki"
    message: string="This is a great product!"
    likes: number=10
}