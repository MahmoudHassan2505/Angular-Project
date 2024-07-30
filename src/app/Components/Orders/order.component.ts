import { AfterViewInit, Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { IProduct } from '../../Models/iproduct';
import { ICategory } from '../../Models/icategory';
import { OrderItem } from '../../Models/order-item';
import { ProductTableComponent } from '../product-table/product-table.component';
import { HttpProductServices } from '../../Services/http-product-services.service';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent implements AfterViewInit,OnChanges,OnInit{

  totalPrice:number = 0;
  productList:IProduct[]=[];
  categortList:ICategory[];
  selectedCategoryId:number=0;
  orderDate: Date;  
  Oreder: OrderItem[]=[];

  // ClientNameInput?:ElementRef; //Optional

  //This will bring The Object from HTML this line execute at AfterViewInit Phase 
 @ViewChild('ClientName') ClientNameInput!:ElementRef; //Non-Null assertion operator

 //Get Object of Ts of the component
 @ViewChild(ProductTableComponent) prodTable!:ProductTableComponent;

  
  constructor(private productservice:HttpProductServices,){
    this.orderDate = new Date;
    this.categortList = [{id:1,name:'Laptops'},{id:2,name:'Cars'},{id:3,name:'Periphrals'}];
    
  }
  ngOnInit(): void {
   this.productservice.getAllProduct().subscribe(x=>{
    this.productList = x;
    console.log(x)
   });
  }
  ngOnChanges(): void {
    this.productservice.getProductByCatId(this.selectedCategoryId).subscribe(x=>{
      this.productList=x;
    });
  }
  ngAfterViewInit(): void {
    this.ClientNameInput.nativeElement.value ="Name"
    this.ClientNameInput.nativeElement.style.border="2px solid blue"

    console.log(this.prodTable.totalPrice)
  }
}
