import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../Models/iproduct';
import { catchError, Observable, of, retry, throwError } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class HttpProductServices {

  productEndPoint ="products";
  httpOptions;

  constructor(private http:HttpClient) {
    this.httpOptions ={
      headers: new HttpHeaders({
        'Content-Type':'application/json',
      })
    }
  }

  getAllProduct(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>(`${environment.API_URL}/${this.productEndPoint}`)
  }

  getProductById(prodID:number):Observable<IProduct>{
    return this.http.get<IProduct>(`${environment.API_URL}/${this.productEndPoint}?id=${prodID}`)
  }
  
  getProductByCatId(catId:number){
    return this.http.get<IProduct[]>(`${environment.API_URL}/${this.productEndPoint}?categoryid=${catId}`)
  }

  addProduct(newProduct:IProduct):Observable<IProduct>{
    return this.http
    .post<IProduct>(`${environment.API_URL}/${this.productEndPoint}`,JSON.stringify(newProduct),this.httpOptions)
    .pipe(
      retry(3),
      catchError((err)=>{
        console.log(err);
        return throwError(()=> new Error("There occured"));
      })
    )
  }

  updateProduct(prodID:number, product:IProduct){}

  deleteProdcut(prodID:number){}



}
