import { Injectable } from '@angular/core';
import { IProduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartList:IProduct[]=[];
  cartName:string="Guest";
  constructor() { }

  addItem(prod:IProduct){
    this.cartList.push(prod);
  }

  updateName(name:string){
    this.cartName=name;
  }

  getName():string{
    return this.cartName;
  }

  getCart():IProduct[]{
    return this.cartList;
  }

}
