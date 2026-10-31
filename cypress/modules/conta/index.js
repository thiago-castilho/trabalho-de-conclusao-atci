const seletores = {
  botaoExcluirConta: 'a[href="/delete_account"]',
  mensagemContaExcluida: '[data-qa="account-deleted"]',
};

function excluirConta() {
  cy.get(seletores.botaoExcluirConta).click();
}

function validarContaExcluida() {
  cy.get(seletores.mensagemContaExcluida)
    .should('be.visible')
    .and('contain', 'Account Deleted!');
}

module.exports = {
  excluirConta,
  validarContaExcluida,
};