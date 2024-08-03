import { Component } from '@angular/core';
import { ICategory } from '../../Models/icategory';
import { IProduct } from '../../Models/iproduct';
import { ProductServiceService } from '../../Services/product-service.service';
import { HttpProductServices } from '../../Services/http-product-services.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {

  categortList:ICategory[];
  newProduct:IProduct={} as IProduct;

  constructor(private productService:HttpProductServices){
    this.categortList = [{id:1,name:'Laptops'},{id:2,name:'Cars'},{id:3,name:'Periphrals'}];
  }

  onSumbit() {
    this.productService.addProduct(this.newProduct).subscribe({
      next:(p)=> alert(p.name+' Added Successfullt'),
      error:(err) => alert(err.message)
    });
    }
}
