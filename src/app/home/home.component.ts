import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  filenamestartbaner=[
  {id:1,address:"../assets/img/banner/banner-side-slider-1.jpg",name:"banner-side-slider-1.jpg"},
  {id:2,address:"../assets/img/banner/banner-side-slider-2.jpg",name:"banner-side-slider-2.jpg"}];
  filenamemainslider=[
  {id:0,address:"./assets/img/main-slider/img-slider-2/1.jpg",name:"banner-side-slider-2.jpg",active:"active",dataslideto:"0"},
  {id:1,address:"./assets/img/main-slider/img-slider-2/2.jpg",name:"banner-side-slider-2.jpg",active:"",dataslideto:"1"},
  {id:2,address:"./assets/img/main-slider/img-slider-2/3.jpg",name:"banner-side-slider-3.jpg",active:"",dataslideto:"2"},
  {id:3,address:"./assets/img/main-slider/img-slider-2/4.jpg",name:"banner-side-slider-4.jpg",active:"",dataslideto:"3"},
  {id:4,address:"./assets/img/main-slider/img-slider-2/5.jpg",name:"banner-side-slider-5.jpg",active:"",dataslideto:"4"},
  {id:5,address:"./assets/img/main-slider/img-slider-2/6.jpg",name:"banner-side-slider-6.jpg",active:"",dataslideto:"5"},
  {id:6,address:"./assets/img/main-slider/img-slider-2/7.jpg",name:"banner-side-slider-7.jpg",active:"",dataslideto:"6"}
];
viewall:string=" مشاهده همه"
picturepishned="./assets/img/theme/amazing-1.png"
timersetInterval=4000;
x11:string="0"

 valueid:number=0;




 ngOnInit() {

  this.runtimime(this.valueid)
 }
 changeactive(getvalueid:number)
 {
  this.filenamemainslider.find((slider) =>
  {
    if ( slider.id ==getvalueid)
    slider.active="active"
   else
      slider.active=""
   }
   );
}

runtimime(valueid1:number)
{
  this.timersetInterval=4000;
  console.log(this.timersetInterval)
  setInterval(() => {
    this.changeactive(valueid1);
    valueid1+=1
    if (valueid1==6)
      valueid1=0

  }, this.timersetInterval);
}


}
