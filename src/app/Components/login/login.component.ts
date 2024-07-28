import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../../Services/user-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  isUserLogged =false;

  constructor(private userAuth:UserAuthService){}
  
  
  ngOnInit(): void {
    this.isUserLogged = this.userAuth.isUserLogged
    this.userAuth.statusSubject().subscribe(
      x => this.isUserLogged=x
    );
  }

  

  login(){
    this.userAuth.login('me','me');
    this.isUserLogged=this.isUserLogged
  }


}
