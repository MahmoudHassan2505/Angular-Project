import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../../Models/iproduct';
import { OrderItem } from '../../Models/order-item';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrl: './product-table.component.css'
})
export class ProductTableComponent {

@Input() prodList: IProduct[]=[];
totalPrice:number=0;
@Output() totalPriceEmitter = new EventEmitter<number>();
@Output() orderItem = new EventEmitter<OrderItem>();

Buy(item:IProduct,count:any) {
  if(count<=0){
    return;
  }
  this.totalPrice+=item.price*count;
  //this wiill emit the new value
  this.totalPriceEmitter.emit(this.totalPrice);
  this.orderItem.emit({ id: item.id, name: item.name, price: item.price, quantity: count })
}
}
