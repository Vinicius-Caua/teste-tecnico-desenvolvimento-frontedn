import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';
import { CepService } from '../../../services/cep.service';
import { CepType } from '../../../types/cep.type';
import { InformationModel } from '../../../model/information.model';
import { nameValidator } from './validators/name.validation';
import { CustomValidators } from './validators/cpf.validation';
import { emailValidator } from './validators/email.validation';
import { dateNotInFutureValidator } from './validators/date.validation';
import { differenceInYears, parseISO, isBefore, subYears } from 'date-fns';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgxMaskDirective],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent implements OnInit {
  // Formulário de CEP
  formCep: FormGroup;

  userName: string = '';
  userEmail: string = '';
  userCpf: string = '';
  userBirthDate: string = '';
  userAge: number = 0;

  submittedCepForm: any;
  cepResponse: CepType = {
    cep: '',
    logradouro: '',
    complemento: '',
    bairro: '',
    localidade: '',
    estado: '',
  };

  constructor(
    private readonly cepService: CepService,
    private formBuilder: FormBuilder
  ) {
    // Validadores do formulário
    this.formCep = this.formBuilder.group({
      name: ['', Validators.required, nameValidator()],
      email: ['', [Validators.required, emailValidator()]],
      cpf: ['', Validators.required, CustomValidators.cpfValidator],
      date: ['', [Validators.required, dateNotInFutureValidator()]],
      cep: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    this.createFormInformation(new InformationModel());
  }

  createFormInformation(InformationModel: InformationModel) {
    this.formCep.patchValue({
      name: InformationModel.name,
      email: InformationModel.email,
      cpf: InformationModel.cpf,
      date: InformationModel.age,
      cep: InformationModel.cep,
    });
  }

  isCepValid(): boolean {
    return !!(
      this.cepResponse.cep &&
      this.cepResponse.logradouro &&
      this.cepResponse.bairro &&
      this.cepResponse.localidade &&
      this.cepResponse.estado
    );
  }

  onSubmitInformationForm() {
    // Verifica se o formulário é válido antes de enviar
    if (this.formCep.invalid) {
      this.formCep.markAllAsTouched();
      return;
    }

    // Obtém informações do formulário
    this.userName = this.formCep.value.name;
    this.userEmail = this.formCep.value.email;
    this.userCpf = this.formCep.value.cpf;
    this.userBirthDate = this.formCep.value.date;

    // Verifica se a data de nascimento é válida
    if (this.userBirthDate) {
      const birthDate = typeof this.userBirthDate === 'string' ? parseISO(this.userBirthDate) : this.userBirthDate;
      if (isNaN(birthDate.getTime())) {
        console.error('Data de nascimento inválida');
        this.userAge = 0;
      } else {
        this.userAge = this.calcAge(birthDate);
      }
    } else {
      console.error('Data de nascimento não fornecida');
      this.userAge = 0;
    }

    // Processa o CEP
    let cep = this.formCep.value.cep.replace(/\D/g, ''); // Remove caracteres não numéricos

    // Chama o serviço para buscar os dados do CEP antes de enviar o formulário
    this.cepService.getCep(cep).subscribe(
      (response) => {
        if ('erro' in response) { // Verifica se a resposta contém 'erro'
          console.error('CEP inválido!');
          this.cepResponse = { cep: '', logradouro: '', complemento: '', bairro: '', localidade: '', estado: '' };
          alert('CEP inválido. Corrija antes de continuar.');
        } else {
          this.cepResponse = response;
          console.log('Formulário enviado com sucesso!', this.formCep.value);
        }
      },
      (error) => {
        console.error('Erro ao buscar CEP:', error);
        alert('Erro ao buscar o CEP. Tente novamente mais tarde.');
      }
    );
  }

  calcAge(birthDate: Date): number {
    const nowDate = new Date();
    let age = differenceInYears(nowDate, birthDate);
    const adjustedBirthDate = subYears(nowDate, age); // Subtrai a idade do ano atual
    if (isBefore(nowDate, adjustedBirthDate)) {
      age--;
    }
    return age;
  }
}
