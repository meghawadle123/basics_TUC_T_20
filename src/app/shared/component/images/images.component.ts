import { Component } from "@angular/core";

@Component({
    selector:"app-image",
    templateUrl:"./images.component.html",
    styleUrls:["./images.component.scss"]
})
export class ImagesComponent{
 images = [
    {
      id: 1,
      title: "Nature 1",
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
    },
    {
      id: 2,
      title: "Nature 2",
      url: "https://images.unsplash.com/photo-1492724441997-5dc865305da7"
    },
    {
      id: 3,
      title: "Nature 3",
      url: "https://images.unsplash.com/photo-1516117172878-fd2c41f4a759"
    }
  ];
}