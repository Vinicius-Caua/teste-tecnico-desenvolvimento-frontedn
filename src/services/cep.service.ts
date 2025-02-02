import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { CepType } from "../types/cep.type";

@Injectable({ providedIn: 'root' })
export class CepService {
  cepResponse: CepType = {
    cep: '',
    logradouro: '',
    complemento: '',
    bairro: '',
    localidade: '',
    estado: '',
  };

  constructor(private readonly httpClient: HttpClient) {}

  getCep(cep: string) {
    return this.httpClient
      .get<CepType>(`https://viacep.com.br/ws/${cep}/json/`)
      .pipe(
        map((response) => {
          this.cepResponse = response;
          return this.cepResponse;
        })
      );
  }
}
