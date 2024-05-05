import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../../Services/product-service.service';
import { IProduct } from '../../Models/iproduct';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {

  currntid:number=0;
  product?:IProduct|null;

  constructor(private productService:ProductServiceService,private activatedRoute:ActivatedRoute, private location:Location){
  }

  ngOnInit(): void {
    this.currntid=Number(this.activatedRoute.snapshot.paramMap.get('pid'));
    this.product=this.productService.getProductById(this.currntid);
  }

  goBack() {
    this.location.back();
    }

}
