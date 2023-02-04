import { Component } from '@angular/core';

@Component({
  selector: 'app-bestselling',
  templateUrl: './bestselling.component.html',
  styleUrls: ['./bestselling.component.css']
})
export class BestsellingComponent {
 TextHeader:string="پر فروش ترینها";
 viewall:string="مشاهده همه";

 listbestselling=[
  {id:1,address:"./assets/img/products/07.jpg",name:"مانتو زنانه",price:"157,000",category:"لباس زنانه",offer:"20%"},
  {id:2,address:"./assets/img/products/08.jpg",name:"مانتو زنانه",price:"157,000",category:"لباس زنانه",offer:"30%"},
  {id:3,address:"./assets/img/products/09.jpg",name:"مانتو زنانه",price:"157,000",category:"لباس زنانه",offer:"40%"},
  {id:4,address:"./assets/img/products/010.jpg",name:"مانتو زنانه",price:"157,000",category:"لباس زنانه",offer:"50%"},
  {id:5,address:"./assets/img/products/011.jpg",name:"مانتو زنانه",price:"157,000",category:"لباس زنانه",offer:"40%"},
  {id:6,address:"./assets/img/products/012.jpg",name:"مانتو زنانه",price:"157,000",category:"لباس زنانه",offer:"30%"},
  {id:7,address:"./assets/img/products/013.jpg",name:"مانتو زنانه",price:"157,000",category:"لباس زنانه",offer:"10%"},
];
}
