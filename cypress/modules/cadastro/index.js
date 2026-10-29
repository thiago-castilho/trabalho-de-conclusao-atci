const seletores = {
  inputNome: '[data-qa="signup-name"]',
  inputEmail: '[data-qa="signup-email"]',
  botaoSignup: '[data-qa="signup-button"]',
  radioButtonGenero: {
    male: '#id_gender1',
    female: '#id_gender2',
  },
  inputSenha: '[data-qa="password"]',
  selectDia: '[data-qa="days"]',
  selectMes: '[data-qa="months"]',
  selectAno: '[data-qa="years"]',
  checkboxNewsletter: '#newsletter',
  checkboxSpecialOffers: '#optin',
  inputPrimeiroNome: '[data-qa="first_name"]',
  inputSobrenome: '[data-qa="last_name"]',
  inputEmpresa: '[data-qa="company"]',
  inputEndereco: '[data-qa="address"]',
  selectPais: '[data-qa="country"]',
  inputEstado: '[data-qa="state"]',
  inputCidade: '[data-qa="city"]',
  inputCEP: '[data-qa="zipcode"]',
  inputTelefone: '[data-qa="mobile_number"]',
  botaoCreateAccount: '[data-qa="create-account"]',
  mensagemDeSucesso: '[data-qa="account-created"]',
}

function iniciarCadastro(usuario) {
  cy.get(seletores.inputNome).type(`${usuario.primeiroNome} ${usuario.sobrenome}`);
  cy.get(seletores.inputEmail).type(usuario.email);
  cy.get(seletores.botaoSignup).click();
}

function preencherFormulario(usuario) {
  cy.get(seletores.radioButtonGenero[usuario.genero]).check();
  cy.get(seletores.inputSenha).type(usuario.senha);
  cy.get(seletores.selectDia).select(usuario.dia);
  cy.get(seletores.selectMes).select(usuario.mes);
  cy.get(seletores.selectAno).select(usuario.ano);
  if (usuario.newsletter) {
    cy.get(seletores.checkboxNewsletter).check();
  }
  if (usuario.specialOffers) {
    cy.get(seletores.checkboxSpecialOffers).check();
  }
  cy.get(seletores.inputPrimeiroNome).type(usuario.primeiroNome);
  cy.get(seletores.inputSobrenome).type(usuario.sobrenome);
  cy.get(seletores.inputEmpresa).type(usuario.empresa);
  cy.get(seletores.inputEndereco).type(usuario.endereco);
  cy.get(seletores.selectPais).select(usuario.pais);
  cy.get(seletores.inputEstado).type(usuario.estado);
  cy.get(seletores.inputCidade).type(usuario.cidade);
  cy.get(seletores.inputCEP).type(usuario.cep);
  cy.get(seletores.inputTelefone).type(usuario.telefone);
}

function cadastrarUsuario(usuario) {
  preencherFormulario(usuario);
  cy.get(seletores.botaoCreateAccount).click();
}

function validarCadastroRealizado() {
  cy.get(seletores.mensagemDeSucesso)
    .should('be.visible')
    .and('contain', 'Account Created!');
}

module.exports = {
  iniciarCadastro,
  cadastrarUsuario,
  validarCadastroRealizado,
}
