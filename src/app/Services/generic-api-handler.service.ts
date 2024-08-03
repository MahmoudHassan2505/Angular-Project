import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { APIResponseVM } from '../ViewModels/apiresponse-vm';

@Injectable({
  providedIn: 'root'
})
export class GenericApiHandlerService {

  httpOptions;


  constructor(private http:HttpClient) {
    this.httpOptions ={
      headers: new HttpHeaders({
        'Content-Type':'application/json',
      })
    }
  }

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

  private setHeaders(key:string,value:string){
    this.httpOptions.headers.set(key,value);
  }


  getAll(endpoint:string):Observable<APIResponseVM>{
    return this.http
    .get<APIResponseVM>(`${environment.API_URL}/${endpoint}`)
    .pipe(
      retry(3),
      catchError(this.handleError)
    )
  }

  getById(id:number){}

  add(newObj:any){}

  put(id:number,newObj:any){}

  delete(id:number){}


}
