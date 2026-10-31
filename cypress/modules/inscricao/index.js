const seletores = {
  inputDeEmail: '#susbscribe_email',
  botaoDeInscricao: '#subscribe',
  mensagemDeInscricao: '.alert.alert-success',
  titulo: 'footer h2',
}

function acessarPaginaDeInscricao() {
  cy.visit('/');
  validarInscricaoVisivel();
}

function validarInscricaoVisivel() {
  cy.get(seletores.titulo).should('be.visible').and('contain', 'Subscription');
}

function preencherFormularioDeInscricao(email) {
  cy.get(seletores.inputDeEmail).type(email);
  cy.get(seletores.botaoDeInscricao).click();
}

function validarResultadoDaInscricao() {
  cy.get(seletores.mensagemDeInscricao).should('be.visible').and('contain', 'You have been successfully subscribed!');
}

module.exports = {
  acessarPaginaDeInscricao,
  preencherFormularioDeInscricao,
  validarResultadoDaInscricao,
};