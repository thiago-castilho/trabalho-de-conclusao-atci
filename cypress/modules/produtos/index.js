const seletores = {
  tituloDaPagina: 'h2.title',
  listaDeProdutos: '.features_items',
  primeiroProduto: '.features_items .choose a',
  detalhesDoProduto: '.product-information',
  inputDePesquisa: '#search_product',
  botaoDePesquisa: '#submit_search',
  inputAvaliacaoNome: '#name',
  inputAvaliacaoEmail: '#email',
  inputAvaliacao: '#review',
  botaoAvaliacao: '#button-review',
  alertaSucessoAvaliacao: '#review-section .alert-success.alert'
}

function acessarPaginaDeProdutos() {
  cy.visit('/products');
  cy.get(seletores.tituloDaPagina).should('be.visible').and('contain', 'All Products');
}

function pesquisarProduto(nome) {
  cy.get(seletores.inputDePesquisa).type(nome);
  cy.get(seletores.botaoDePesquisa).click();
}

function validarResultadoDaPesquisa(nome) {
  cy.get(seletores.tituloDaPagina).should('be.visible').and('contain', 'Searched Products');
  cy.get(seletores.listaDeProdutos).should('be.visible').and('contain', nome);
}

function visualizarDetalhesDoPrimeiroProduto() {
  cy.get(seletores.listaDeProdutos).should('be.visible');
  cy.get(seletores.primeiroProduto).first().click();
}

function validarDetalhesDoPrimeiroProduto(produto) {
  cy.get(seletores.detalhesDoProduto).should('be.visible').and('contain', produto.nome);
  cy.get(seletores.detalhesDoProduto).should('be.visible').and('contain', produto.categoria);
  cy.get(seletores.detalhesDoProduto).should('be.visible').and('contain', produto.preco);
  cy.get(seletores.detalhesDoProduto).should('be.visible').and('contain', produto.disponibilidade);
  cy.get(seletores.detalhesDoProduto).should('be.visible').and('contain', produto.condicao);
  cy.get(seletores.detalhesDoProduto).should('be.visible').and('contain', produto.marca);
}

function avaliarProduto(usuario) {
  cy.get(seletores.inputAvaliacaoNome).type(usuario.nome);
  cy.get(seletores.inputAvaliacaoEmail).type(usuario.email);
  cy.get(seletores.inputAvaliacao).type(usuario.avaliacao);
  cy.get(seletores.botaoAvaliacao).click();
}

function validarSucessoDaAvaliacaoDoProduto() {
  cy.contains(seletores.alertaSucessoAvaliacao, 'Thank you for your review.').should('be.visible');
}

module.exports = {
  acessarPaginaDeProdutos,
  visualizarDetalhesDoPrimeiroProduto,
  validarDetalhesDoPrimeiroProduto,
  pesquisarProduto,
  validarResultadoDaPesquisa,
  avaliarProduto,
  validarSucessoDaAvaliacaoDoProduto
}