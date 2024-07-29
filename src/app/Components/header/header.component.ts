import { Component } from '@angular/core';
import { StoreData } from '../../ViewModels/store-data';
import { UserAuthService } from '../../Services/user-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private authService:UserAuthService){}

logOut() {
  this.authService.logout();
}


}
