# SistemaCadastro
<a id="readme-top"></a>
Acesse o projeto em formato [online](https://cadastrogr.netlify.app).

Projeto Gerado por Angular [Angular CLI](https://github.com/angular/angular-cli) versão 17.3.11.

## Descrição do Projeto

A equipe de RH da ModalGR solicitou o desenvolvimento de um sistema de cadastro de pessoas utilizando TypeScript/JavaScript, sendo preferencialmente desenvolvido em Angular. O sistema deverá conter os seguintes campos e validações. O sistema deve estar devidamente estilizado e realizar uma integração com a API ViaCEP para preenchimento automático do endereço com base no CEP informado.

### Campos do Formulário e Validações

1. **Nome**
   - Deve conter até 150 caracteres, permitindo apenas letras (incluindo espaços e caracteres acentuados, se aplicável).
   - Campo obrigatório.

2. **CPF**
   - Deve ser um CPF com 11 dígitos numéricos e ser formatado automaticamente para 000.000.000-00.
   - Deve ser validado para garantir que o CPF é válido.
   - Campo obrigatório.

3. **Data de Nascimento**
   - Deve ser uma data válida.
   - Campo obrigatório.

4. **E-mail**
   - Deve conter até 200 caracteres.
   - Deve seguir o formato padrão de e-mail (exemplo: nome@dominio.com).
   - Campo obrigatório.

5. **CEP**
   - Deve conter 8 dígitos numéricos e ser formatado automaticamente para 00000-000.
   - Deve ser validado para garantir que o CEP existe.
   - Integração com a API ViaCEP:
     - Campo obrigatório.
     - Após a inserção do CEP, o sistema deve consultar a API ViaCEP para preencher os campos de logradouro, bairro, cidade e estado.

### Funcionamento

Ao clicar no botão Cadastrar, o sistema deve:
1. Validar os campos preenchidos.
2. Consultar a API ViaCEP para obter o endereço correspondente ao CEP informado.
3. Exibir os dados cadastrados em uma tabela contendo:
   - Nome
   - E-mail
   - Idade (calculada com base na data de nascimento e o momento atual)
   - CPF
   - CEP
   - Logradouro
   - Bairro
   - Cidade
   - Estado

O sistema deve ser estilizado e garantir uma experiência amigável ao usuário.

## Servidor de Desenvolvimento

Execute `ng serve` para iniciar um servidor de desenvolvimento. Navegue para `http://localhost:4200/`. A aplicação será recarregada automaticamente se você alterar qualquer um dos arquivos de origem.

## Criação de Código

Execute `ng generate component component-name` para gerar um novo componente. Você também pode usar `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Construção

Execute `ng build` para construir o projeto. Os artefatos de construção serão armazenados no diretório `dist/`.

## Executando Testes Unitários

Execute `ng test` para executar os testes unitários via [Karma](https://karma-runner.github.io).

## Executando Testes de Ponta a Ponta

Execute `ng e2e` para executar os testes de ponta a ponta via uma plataforma de sua escolha. Para usar este comando, você precisa primeiro adicionar um pacote que implemente capacidades de teste de ponta a ponta.

## Ajuda Adicional

Para obter mais ajuda sobre o Angular CLI, use `ng help` ou consulte a página [Angular CLI Overview and Command Reference](https://angular.io/cli).

## Ferramentas Utilizadas

- `Angular.js`
- `Tailwind CSS`
- `Visual Studio Code`
- `Netlify`

<p align="right">(<a href="#readme-top">Voltar ao Início</a>)</p>
