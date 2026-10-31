const seletores = {
  inputEmail: '[data-qa="login-email"]',
  inputSenha: '[data-qa="login-password"]',
  botaoLogin: '[data-qa="login-button"]',
  usuarioAutenticado: '.navbar-nav a',
  mensagemDeErro: '.login-form p',
}

function acessarLogin() {
  cy.visit('/login');
}

function efetuarLogin(email, senha) {
  cy.get(seletores.inputEmail).type(email);
  cy.get(seletores.inputSenha).type(senha);
  cy.get(seletores.botaoLogin).click();
}

function validarUsuarioAutenticado(nome) {
  cy.contains(seletores.usuarioAutenticado, 'Logged in as')
    .should('be.visible')
    .and('contain', nome);
}

function validarMensagemDeErro(mensagem) {
  cy.contains(seletores.mensagemDeErro, mensagem)
    .should('be.visible');
}

module.exports = {
  acessarLogin,
  efetuarLogin,
  validarUsuarioAutenticado,
  validarMensagemDeErro,
}
