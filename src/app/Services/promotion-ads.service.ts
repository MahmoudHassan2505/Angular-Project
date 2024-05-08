import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromotionAdsService {
  private adsList:string[];
  constructor() { 
    this.adsList =["Big Discounts","ٍSale up to 50%","Buy 2 get 2","Welcome to Our Site","Easy Come Easy go"]
  }

  getScheduledAds():Observable<string>{
    return new Observable<string>((observer)=>{
      // observer.next(); // to tell the subscriber there is another item
      // observer.error();// to tell the subscriber there is an error
      // observer.complete();// to tell the subscriber that is no more data

      let counter =0;

      let adsTimer = setInterval(()=>{
        if(counter==this.adsList.length){
          observer.complete();
        }
        if(this.adsList[counter]==""){
          observer.error("Empty Ad");
        }
        observer.next(this.adsList[counter]);
        counter++;
        
      },2*1000);
      return {
        unsubscribe() {
          // will be called in 3 casses:
          //   1- if there is an error
          //   2- if it completed
          //   3-if I called unsubscribe function manually
          
          //To Stop interval
          clearInterval(adsTimer);
        },
      }
    },);
  }
}
