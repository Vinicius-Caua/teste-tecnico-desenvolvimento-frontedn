import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function emailValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const valor = control.value;
    // Expressão regular para validar o formato de e-mail utilizando regex
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (valor && (valor.length > 200 || !regex.test(valor))) {
      return { emailInvalido: true };
    }
    return null;
  };
}
