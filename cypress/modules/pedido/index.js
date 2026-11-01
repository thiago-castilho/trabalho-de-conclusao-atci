const produtos = require('../produtos/index.js');

const seletores = {
  botaoAdicionarAoCarrinho: '.single-products > .productinfo > .btn',
  mensagemProdutoAdicionadoAoCarrinho: '#cartModal p',
  botaoAcessarCarrinho: '#cartModal a[href="/view_cart"]',
  produtoNoCarrinho: '.cart_description a',
  botaoProceedToCheckout: 'Proceed To Checkout',
  tituloDetalhesDoEndereco: '#address_delivery > .address_title > .page-subheading',
  nomeDoUsuario: '#address_delivery .address_firstname',
  linhasDeEndereco: '#address_delivery .address_address1.address_address2',
  cidadeEstadoCepDoUsuario: '#address_delivery .address_city.address_state_name.address_postcode',
  paisDoUsuario: '#address_delivery .address_country_name',
  telefoneDoUsuario: '#address_delivery .address_phone',
  comentario: '.form-control',
  botaoDeFazerPedido: '.btn.btn-default.check_out',
  nomeDoCartao: '[data-qa="name-on-card"]',
  numeroDoCartao: '[data-qa="card-number"]',
  cvcDoCartao: '[data-qa="cvc"]',
  mesDoVencimentoDoCartao: '[data-qa="expiry-month"]',
  anoDoVencimentoDoCartao: '[data-qa="expiry-year"]',
  botaoDePagamento: '[data-qa="pay-button"]',
  mensagemPedidoConfirmado: '[data-qa="order-placed"] > b',
}

function adicionarProdutoAoCarrinho(nomeProduto) {
  produtos.acessarPaginaDeProdutos();
  produtos.pesquisarProduto(nomeProduto);
  cy.get(seletores.botaoAdicionarAoCarrinho).first().click();
  validarProdutoAdicionadoAoCarrinho();
}

function validarProdutoAdicionadoAoCarrinho() {
  cy.get(seletores.mensagemProdutoAdicionadoAoCarrinho).first().should('be.visible').and('contain', 'Your product has been added to cart.');
}

function acessarCarrinho() {
  cy.get(seletores.botaoAcessarCarrinho).click();
}

function validarProdutoNoCarrinho(nomeProduto) {
  cy.get(seletores.produtoNoCarrinho).should('be.visible').and('contain', nomeProduto);
}

function clicarNoBotaoDeCheckout() {
  cy.contains(seletores.botaoProceedToCheckout).click();
}

function validarDetalhesDoEndereco(usuario) {
  cy.get(seletores.tituloDetalhesDoEndereco).should('be.visible').and('contain', 'Your delivery address');
  cy.get(seletores.nomeDoUsuario).should('be.visible').and('contain', usuario.primeiroNome);
  cy.get(seletores.linhasDeEndereco).eq(0).should('be.visible').and('contain', usuario.empresa);
  cy.get(seletores.linhasDeEndereco).eq(1).should('be.visible').and('contain', usuario.endereco);
  cy.get(seletores.cidadeEstadoCepDoUsuario).should('be.visible').and('contain', usuario.cidade);
  cy.get(seletores.cidadeEstadoCepDoUsuario).should('be.visible').and('contain', usuario.estado);
  cy.get(seletores.cidadeEstadoCepDoUsuario).should('be.visible').and('contain', usuario.cep);
  cy.get(seletores.paisDoUsuario).should('be.visible').and('contain', usuario.pais);
  cy.get(seletores.telefoneDoUsuario).should('be.visible').and('contain', usuario.telefone);
}

function preencherComentarioEFazerPedido(comentario) {
  cy.get(seletores.comentario).type(comentario);
  cy.get(seletores.botaoDeFazerPedido).click();
}

function preencherDetalhesDoPagamento(detalhesDoPagamento) {
  cy.get(seletores.nomeDoCartao).type(detalhesDoPagamento.nome);
  cy.get(seletores.numeroDoCartao).type(detalhesDoPagamento.numero);
  cy.get(seletores.cvcDoCartao).type(detalhesDoPagamento.cvc);
  cy.get(seletores.mesDoVencimentoDoCartao).type(detalhesDoPagamento.mes);
  cy.get(seletores.anoDoVencimentoDoCartao).type(detalhesDoPagamento.ano);
}

function confirmarPedido() {
  cy.get(seletores.botaoDePagamento).click();
}

function validarPedidoConfirmado() {
  cy.get(seletores.mensagemPedidoConfirmado).should('be.visible').and('contain', 'Order Placed!');
}

module.exports = {
  adicionarProdutoAoCarrinho,
  acessarCarrinho,
  validarProdutoNoCarrinho,
  clicarNoBotaoDeCheckout,
  validarDetalhesDoEndereco,
  preencherComentarioEFazerPedido,
  preencherDetalhesDoPagamento,
  confirmarPedido,
  validarPedidoConfirmado,
}