
import { Component } from "@angular/core";
import { Icomment_list } from "src/app/models/comment_list_interface";

@Component({
    selector:"app-comment-list",
    templateUrl:"./comment_list.component.html",
    styleUrls:["./comment_list.component.scss"]
})
export class CommentList{
posts :Array<Icomment_list>= [
  {
    id: 1,
    title: "Beautiful Nature",
    body: "This is a description about nature.",
    imgUrl: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
    author: "Megha"
  },
  {
    id: 2,
    title: "Mountain View",
    body: "Amazing mountain scenery.",
    imgUrl: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
    author: "John"
  },
  {
    id: 3,
    title: "Forest Life",
    body: "Peaceful forest environment.",
    imgUrl: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d",
    author: "Alex"
  },
  {
  id: 4,
  title: "Ocean View",
  body: "Relaxing view of the deep blue ocean.",
  imgUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  author: "Sophia"
}
];
}