import { ValidatorFn, AbstractControl, ValidationErrors } from "@angular/forms";
import { parseISO, isAfter, isToday } from "date-fns";

export function dateNotInFutureValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const dateValue = control.value;
    if (!dateValue) {
      return null;
    }
    const birthDate = typeof dateValue === 'string' ? parseISO(dateValue) : dateValue; // Converte a data de nascimento para o formato Date
    const nowDate = new Date();
    // Verifica se a data de nascimento é válida
    if (isAfter(birthDate, nowDate)) {
      return { futureDate: true };
    }

    if (isToday(birthDate)) {
      return { todayDate: true };
    }
    return null;
  };
}
