import { Component, OnDestroy, OnInit } from '@angular/core';
import { StoreData } from '../../ViewModels/store-data';
import { PromotionAdsService } from '../../Services/promotion-ads.service';
import { Observer, Subscriber, Subscription } from 'rxjs';




@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrl: './stars.component.css',
})
export class StarsComponent implements OnInit,OnDestroy{
  addSubs!:Subscription;
  sub!:Subscription;
  toogleImage() {
    this.isImageShown = !this.isImageShown
  }
  
    storeInfo:StoreData
    isImageShown:boolean = true;
    constructor(private adsService:PromotionAdsService){
      this.storeInfo=new StoreData('Ghania Store',"https://picsum.photos/200",["Cairo","Gize","Alex"]);
    }

  ngOnInit(): void {
    let observer ={
      next:(data:string)=>{
        console.log(data)
      },
      error:(err:string)=>{
        console.log(err)
      },
      complete:()=>{
        console.log("completed")
      }      
    };
    this.addSubs=this.adsService.getScheduledAds().subscribe(observer);
    this.sub = this.adsService.getSerialAds().subscribe(
      ad=>{
        console.log(ad);
      }
    );
  }
  ngOnDestroy(): void {
    this.addSubs.unsubscribe()
    this.sub.unsubscribe();
  } 
    
  }
