export class InformationModel{
  name: string;
  email: string;
  cpf: string;
  age: Date;
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  estado: string;
  static cep: any;

  constructor(){
    this.name = '';
    this.email = '';
    this.cpf = '';
    this.age = new Date();
    this.cep = '';
    this.logradouro = '';
    this.complemento = '';
    this.bairro = '';
    this.localidade = '';
    this.estado = '';
  }
}
