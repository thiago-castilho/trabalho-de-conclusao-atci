const seletores = {
  botaoLogout: 'Logout',
  botaoLogin: '[data-qa="login-button"]',
}

function efetuarLogout() {
  cy.contains(seletores.botaoLogout).click();
}

function validarRetornoParaLogin() {
  cy.get(seletores.botaoLogin).should('be.visible');
}

module.exports = {
  efetuarLogout,
  validarRetornoParaLogin,
}