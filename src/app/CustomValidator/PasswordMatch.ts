//cross-field Validator

import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function passwordValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    let passwordControl = control.get('password');
    let confirmPasswordControl = control.get('confirmPassword');

    let ValErr = {
      UnmatchedPassword: {
        pass: passwordControl?.value,
        confirm: confirmPasswordControl?.value,
      },
    };

    //chack that both controls are avilable and not empty
    if (
      !passwordControl ||
      !confirmPasswordControl ||
      !passwordControl.value ||
      !confirmPasswordControl.value
    ) {
      return null;
    }

    return passwordControl.value == confirmPasswordControl.value
      ? null
      : ValErr;
  };
}

/* if Validator dosen't need parameter

export const passwordValidatorFN: ValidatorFn =
  (control: AbstractControl): ValidationErrors | null => {
    let passwordControl = control.get('password');
    let confirmPasswordControl = control.get('confirmPassword');

    let ValErr = {
      "UnmatchedPassword": {
        "pass": passwordControl?.value,
        "confirm": confirmPasswordControl?.value,
      },
    };

    //chack that both controls are avilable and not empty
    if (
      !passwordControl ||
      !confirmPasswordControl ||
      !passwordControl.value ||
      !confirmPasswordControl.value
    ) {
      return null;
    }

    return passwordControl.value == confirmPasswordControl.value
      ? null
      : ValErr;
  };
*/
