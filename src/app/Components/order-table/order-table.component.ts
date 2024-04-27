import { Component, Input } from '@angular/core';
import { OrderItem } from '../../Models/order-item';

@Component({
  selector: 'app-order-table',
  templateUrl: './order-table.component.html',
  styleUrl: './order-table.component.css'
})
export class OrderTableComponent {
@Input() orderList: OrderItem[]=[];

Remove(id:number):void{
this.orderList = this.orderList.filter(item=>item.id !== id);
}

}
