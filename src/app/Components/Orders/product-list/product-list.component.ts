import { Component } from '@angular/core';
import { IProduct } from '../../../Models/iproduct';
import { ICategory } from '../../../Models/icategory';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  totalPrice:number = 0;
  productList:IProduct[];
  filterdProductList:IProduct[];
  categortList:ICategory[];
  selectedCategoryId:number=0;
  orderDate: Date;

  constructor(){
    this.orderDate = new Date;

    this.productList = [
      { id: 101, name: 'Elegance Sapphire Laptop', categoryID: 1, price: 89900, quantity: 10, imgUrl: "https://picsum.photos/200" },
      { id: 102, name: 'Apex Blaze Gaming PC', categoryID: 1, price: 12990, quantity:0, imgUrl: "https://picsum.photos/200" },
      { id: 103, name: 'Luminous UltraBook Pro', categoryID: 1, price: 11990, quantity: 6, imgUrl: "https://picsum.photos/200" },
      { id: 104, name: 'Infinity Edge Desktop', categoryID: 2, price: 14990, quantity: 7, imgUrl: "https://picsum.photos/200" },
      { id: 105, name: 'Aurora Dream Tablet', categoryID: 1, price: 79900, quantity: 9, imgUrl: "https://picsum.photos/200" },
      { id: 106, name: 'Nova Horizon Laptop', categoryID: 2, price: 9990, quantity: 12, imgUrl: "https://picsum.photos/200" },
      { id: 107, name: 'Xenon Prism Workstation', categoryID: 1, price: 17099, quantity: 5, imgUrl: "https://picsum.photos/200" },
      { id: 108, name: 'Polaris Shadow Notebook', categoryID: 1, price: 100099, quantity: 11, imgUrl: "https://picsum.photos/200" },
      { id: 109, name: 'Aether Swift Desktop', categoryID: 2, price: 159009, quantity: 7, imgUrl: "https://picsum.photos/200" },
      { id: 110, name: 'Vortex Sparkle Tablet', categoryID: 1, price: 840009, quantity: 10, imgUrl: "https://picsum.photos/200" },
      { id: 111, name: 'Galactic Fusion Laptop', categoryID: 3, price: 11909, quantity: 8, imgUrl: "https://picsum.photos/200" },
      { id: 112, name: 'Eclipse Nova Gaming PC', categoryID: 1, price: 1399, quantity: 9, imgUrl: "https://picsum.photos/200" },
      { id: 113, name: 'Astra Blaze Workstation', categoryID: 3, price: 1899, quantity: 6, imgUrl: "https://picsum.photos/200" },
      { id: 114, name: 'Celestial Spark Notebook', categoryID: 1, price: 10909, quantity: 12, imgUrl: "https://picsum.photos/200" },
      { id: 115, name: 'Spectrum Infinity Desktop', categoryID: 1, price: 1699, quantity: 5, imgUrl: "https://picsum.photos/200" },
      { id: 116, name: 'Solaris Prism Laptop', categoryID: 3, price: 99009, quantity: 11, imgUrl: "https://picsum.photos/200" },
      { id: 117, name: 'Elysium Sapphire Tablet', categoryID: 1, price: 79009, quantity: 10, imgUrl: "https://picsum.photos/200" },
      { id: 118, name: 'Nebula Horizon Notebook', categoryID: 3, price: 11099, quantity: 9, imgUrl: "https://picsum.photos/200" },
      { id: 119, name: 'Quasar Shadow Desktop', categoryID: 3, price: 14909, quantity: 8, imgUrl: "https://picsum.photos/200" },
      { id: 120, name: 'Orbit Fusion Workstation', categoryID: 1, price: 17909, quantity: 7, imgUrl: "https://picsum.photos/200" },
    ];
    this.filterdProductList=this.productList;
    this.categortList = [{id:1,name:'Laptops'},{id:2,name:'Cars'},{id:3,name:'Periphrals'}];
    
  }

  Buy(price: number, count:any) {
    this.totalPrice+=price*count;
  }
  changeCategory() {
    this.selectedCategoryId =1;
    }
    //this function for *ngFor To Enhancement Performance(Not rebuild whole Ui just Update Difference)
  // prodTrackFn(index:number,item:IProduct): number {
  //     return item.id; 
  //     }

filterProductByCategoryId() {
      this.filterdProductList = this.productList.filter(x=>x.categoryID==this.selectedCategoryId);
      }
}
