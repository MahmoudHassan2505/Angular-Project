import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrl: './user-register.component.css',
})
export class UserRegisterComponent implements OnInit {
  userRegisterForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Using Normal Way:

    // this.userRegisterForm = new FormGroup({
    //   fullName: new FormControl('',[Validators.required,Validators.pattern('[A-Za-z]{3,}')]),
    //   mobileNumber:new FormControl(''),
    //   address: new FormGroup({
    //     city:new FormControl(''),
    //     postalCode: new FormControl(''),
    //     street:new FormControl('')
    //   }),
    //   email:new FormControl(''),
    //   password: new FormControl(''),
    //   confirmPassword: new FormControl(''),
    // })

    // Using Form Builder
    this.userRegisterForm = fb.group({
      fullName: ['', [Validators.required, Validators.pattern('[A-Za-z]{3,}')]],
      mobileNumber: [''],
      address: fb.group({
        city: [''],
        postalCode: [''],
        street: [''],
      }),
      email: ['', [Validators.required]],
      password: [''],
      confirmPassword: [''],
    });
  }

  ngOnInit(): void {}

  get fullName() {
    return this.userRegisterForm.get('fullName');
  }
}
