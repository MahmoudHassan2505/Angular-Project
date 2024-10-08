import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { User } from '../../Models/user';
import { passwordValidator } from '../../CustomValidator/PasswordMatch';

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
    this.userRegisterForm = fb.group(
      {
        fullName: [
          '',
          [Validators.required, Validators.pattern('[A-Za-z]{3,}')],
        ],
        mobileNumber: fb.array(['']),
        address: fb.group({
          city: [''],
          postalCode: [''],
          street: [''],
        }),
        email: ['', [Validators.required, this.existEmailValidator()]],
        password: ['', [Validators.required]],
        confirmPassword: [''],
        referral: [''],
        referralOther: [''],
      },
      { validators: passwordValidator() }
    );
  }

  ngOnInit(): void {}

  get fullName() {
    return this.userRegisterForm.get('fullName');
  }

  get email() {
    return this.userRegisterForm.get('email');
  }

  get mobileNumber() {
    return this.userRegisterForm.get('mobileNumber') as FormArray;
  }

  get referral() {
    return this.userRegisterForm.get('referral');
  }

  get confirmPassword() {
    return this.userRegisterForm.get('confirmPassword');
  }

  get password() {
    return this.userRegisterForm.get('password');
  }

  fillForm() {
    // In Case Edit Profile
    //THis way we will set one Value in each line
    // this.userRegisterForm.get('fullName')?.setValue('Test');
    //--------------------------------------------------------------------------------
    //this is the fastest way but will produce error if there is a missing value
    // this.userRegisterForm.setValue({
    //   fullName: 'asd',
    //   mobileNumber: '123123',
    //   address: { city: 'asd', postalCode: '', street: 'asd' },
    //   email: 'asd@asd.com',
    //   password: 'asd',
    //   confirmPassword: 'asd',
    // });
    //---------------------------------------------------------------------------------------------
    //if we want to set just some parameter
    this.userRegisterForm.patchValue({
      fullName: 'asd',
      mobileNumber: ['123123'],
      address: { city: 'asd', postalCode: '', street: 'asd' },
      email: 'asd@asd.com',
    });
  }

  submit() {
    let userModel: User = this.userRegisterForm.value;
    console.log(userModel);
    //clear form
    this.userRegisterForm.reset();
  }

  addNumebr() {
    this.mobileNumber.push(new FormControl(''));
  }

  UpdateReferralValidator() {
    if (this.referral?.value == 'Other') {
      this.userRegisterForm
        .get('referralOther')
        ?.addValidators([Validators.required]);
    } else {
      this.userRegisterForm.get('referralOther')?.clearValidators();
    }

    //after adding or removing validator we call the following function to update the validations
    this.userRegisterForm.get('referralOther')?.updateValueAndValidity();
  }

  //Custom Validator:
  // Validator is a function that return Validator function
  //Sync Validator Function
  existEmailValidator(): ValidatorFn {
    return (cotrol: AbstractControl): ValidationErrors | null => {
      let emailVlue: string = cotrol.value;
      let validationError = {
        EmailNotValid: { value: emailVlue },
      };
      return emailVlue.includes('@') ||
        emailVlue.length == 0 ||
        cotrol.untouched
        ? null
        : validationError;
    };
  }

  /* async Validator Function:
      Take control instance and return Promise or
      Observable that later emits a set of validation error or null
  */
  asyncEmailValidator() {}
}
