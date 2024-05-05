import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../../Models/iproduct';
import { OrderItem } from '../../Models/order-item';
import { Router } from '@angular/router';

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

constructor(private routerService:Router){}

Buy(item:IProduct,count:any) {
  if(count<=0){
    return;
  }
  this.totalPrice+=item.price*count;
  //this wiill emit the new value
  this.totalPriceEmitter.emit(this.totalPrice);
  this.orderItem.emit({ id: item.id, name: item.name, price: item.price, quantity: count })
}

Details(pid: number) {
  // this.routerService.navigateByUrl('/v1/products/'+pid);

  //The navigate function has a promise we can use to do function if the routeing successfully done
  this.routerService.navigate([
    '/v1/products',pid
  ]);
}
}
