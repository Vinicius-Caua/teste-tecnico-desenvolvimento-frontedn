import { AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';

export class CustomValidators {
  static cpfValidator(control: AbstractControl): Observable<ValidationErrors | null> {
    const cpf = control.value;
    if (!cpf) {
      return of(null);
    }

    // Remova caracteres não numéricos
    const cpfClean = cpf.replace(/\D/g, '');

    // Verifique se o CPF tem 11 dígitos
    if (cpfClean.length !== 11) {
      return of({ cpfNotValid: true });
    }

    // Verifique se todos os dígitos são iguais
    if (/^(\d)\1+$/.test(cpfClean)) {
      return of({ cpfNotValid: true });
    }

    // Validação dos dígitos verificadores
    let sum;
    let rest;

    // Validação do primeiro dígito verificador
    sum = 0;
    for (let i = 1; i <= 9; i++) {
      sum += parseInt(cpfClean.substring(i - 1, i), 10) * (11 - i);
    }
    rest = (sum * 10) % 11;
    if (rest === 10 || rest === 11) {
      rest = 0;
    }
    if (rest !== parseInt(cpfClean.substring(9, 10), 10)) {
      return of({ cpfNotValid: true });
    }

    // Validação do segundo dígito verificador
    sum = 0;
    for (let i = 1; i <= 10; i++) {
      sum += parseInt(cpfClean.substring(i - 1, i), 10) * (12 - i);
    }
    rest = (sum * 10) % 11;
    if (rest === 10 || rest === 11) {
      rest = 0;
    }
    if (rest !== parseInt(cpfClean.substring(10, 11), 10)) {
      return of({ cpfNotValid: true });
    }

    // CPF é válido
    return of(null);
  }
}
