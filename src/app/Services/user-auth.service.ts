import { Injectable } from '@angular/core';
import { BehaviorSubject, distinctUntilChanged } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  private isLoggedSubject:BehaviorSubject<boolean>;

  constructor() { 
    this.isLoggedSubject=new BehaviorSubject<boolean>(false);
  }

  login(username:string,password:string){
    //call Login Api and Get AccessToken
    let token = '123456789'
    localStorage.setItem('token',token)
    this.isLoggedSubject.next(true);
  }

  logout(){
    localStorage.removeItem('token')
    this.isLoggedSubject.next(false);
  }

  get isUserLogged(){
   return localStorage.getItem('tokne')? true:false 
  }

  statusSubject(){

    return this.isLoggedSubject.asObservable().pipe(distinctUntilChanged()); // to prevent user from acces the observable
  }

}
