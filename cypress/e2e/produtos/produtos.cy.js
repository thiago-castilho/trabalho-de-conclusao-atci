const produtos = require('../../modules/produtos/index.js');

const produto = require('../../fixtures/produtos.json');
const usuarios = require('../../fixtures/usuarios.json');

describe('Testes de produtos', () => {
  it('Test Case 8: Verify All Products and product detail page', () => {
    produtos.acessarPaginaDeProdutos();
    produtos.visualizarDetalhesDoPrimeiroProduto();
    produtos.validarDetalhesDoPrimeiroProduto(produto.produto_1);
  });

  it('Test Case 9: Search Product', () => {
    produtos.acessarPaginaDeProdutos();
    produtos.pesquisarProduto(produto.produto_1.nome);
    produtos.validarResultadoDaPesquisa(produto.produto_1.nome);
  });

  it('Test Case 21: Add review on product', () => {
    produtos.acessarPaginaDeProdutos();
    produtos.pesquisarProduto(produto.produto_1.nome);
    produtos.visualizarDetalhesDoPrimeiroProduto();
    produtos.avaliarProduto(usuarios.usuario_avaliacao);
    produtos.validarSucessoDaAvaliacaoDoProduto();
  });
});