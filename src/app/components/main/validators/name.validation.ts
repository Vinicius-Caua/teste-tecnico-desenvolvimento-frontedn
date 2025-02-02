import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Observable, of } from 'rxjs';

export function nameValidator(): ValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    const valor = control.value;
    // Expressão regular que permite letras (incluindo acentuadas) utilizando regex
    const regex = /^[a-zA-ZÀ-ÿ\s]{1,150}$/;
    return of(regex.test(valor) ? null : { nomeInvalido: true });
  };
}
