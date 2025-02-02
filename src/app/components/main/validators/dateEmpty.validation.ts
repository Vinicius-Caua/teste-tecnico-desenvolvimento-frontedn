import { ValidatorFn, AbstractControl, ValidationErrors } from "@angular/forms";

export function requiredDateValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const dateValue = control.value?.trim(); 
    return dateValue ? null : { requiredDate: true };
  };
}
