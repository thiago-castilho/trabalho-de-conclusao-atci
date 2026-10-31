const seletores = {
  tituloDaPagina: 'h2.title',
  listaDeProdutos: '.features_items',
  primeiroProduto: '.features_items .choose a',
  detalhesDoProduto: '.product-information',
  inputDePesquisa: '#search_product',
  botaoDePesquisa: '#submit_search',
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

module.exports = {
  acessarPaginaDeProdutos,
  visualizarDetalhesDoPrimeiroProduto,
  validarDetalhesDoPrimeiroProduto,
  pesquisarProduto,
  validarResultadoDaPesquisa,
}