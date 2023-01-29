import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  filenamestartbaner=[{id:1,address:"../assets/img/banner/banner-side-slider-1.jpg",name:"banner-side-slider-1.jpg"},{id:2,address:"../assets/img/banner/banner-side-slider-2.jpg",name:"banner-side-slider-2.jpg"}];
  list:Array<number>=[];
  filenamemainslider=[{id:0,address:"./assets/img/main-slider/img-slider-2/1.jpg",name:"banner-side-slider-1.jpg"},
  {id:1,address:"./assets/img/main-slider/img-slider-2/2.jpg",name:"banner-side-slider-2.jpg"},
  {id:2,address:"./assets/img/main-slider/img-slider-2/3.jpg",name:"banner-side-slider-3.jpg"},
  {id:3,address:"./assets/img/main-slider/img-slider-2/4.jpg",name:"banner-side-slider-4.jpg"},
  {id:4,address:"./assets/img/main-slider/img-slider-2/5.jpg",name:"banner-side-slider-5.jpg"},
  {id:5,address:"./assets/img/main-slider/img-slider-2/6.jpg",name:"banner-side-slider-6.jpg"},
  {id:6,address:"./assets/img/main-slider/img-slider-2/7.jpg",name:"banner-side-slider-7.jpg"}
];

}
