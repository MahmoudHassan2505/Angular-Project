import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
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
      catchError(this.handleError)
    )
  }

  updateProduct(prodID:number, product:IProduct){}

  deleteProdcut(prodID:number){}


  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

}
