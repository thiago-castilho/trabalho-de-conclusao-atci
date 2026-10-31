const produtos = require('../../modules/produtos/index.js');

const produto = require('../../fixtures/produtos.json');

describe('Testes de produtos', () => {
  it('Test Case 8: View Product Details', () => {
    produtos.acessarPaginaDeProdutos();
    produtos.visualizarDetalhesDoPrimeiroProduto();
    produtos.validarDetalhesDoPrimeiroProduto(produto.produto_1);
  });
});