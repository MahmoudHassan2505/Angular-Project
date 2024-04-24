import { Component } from '@angular/core';
import { StoreData } from '../../ViewModels/store-data';




@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrl: './stars.component.css',
})
export class StarsComponent{
  toogleImage() {
    this.isImageShown = !this.isImageShown
  }
  
    storeInfo:StoreData
    isImageShown:boolean = true;
    constructor(){
      this.storeInfo=new StoreData('Ghania Store',"https://picsum.photos/200",["Cairo","Gize","Alex"]);
    }
  
    
  }
