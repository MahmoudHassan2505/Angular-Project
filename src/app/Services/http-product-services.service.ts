import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../Models/iproduct';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class HttpProductServices {

  productEndPoint ="products";

  constructor(private http:HttpClient) { }

  getAllProduct(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>(`${environment.API_URL}/${this.productEndPoint}`);
  }

  getProductById(prodID:number):Observable<IProduct>{
    return this.http.get<IProduct>(`${environment.API_URL}/${this.productEndPoint}?id=${prodID}`);
  }
  
  getProductByCatId(catId:number){
    return this.http.get<IProduct[]>(`${environment.API_URL}/${this.productEndPoint}?categoryid=${catId}`);
  }

  addProduct(newProduct:IProduct){}

  updateProduct(prodID:number, product:IProduct){}

  deleteProdcut(prodID:number){}

}
