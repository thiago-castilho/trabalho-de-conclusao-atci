const login = require('../../modules/login/index.js');
const cadastro = require('../../modules/cadastro/index.js');
const pedido = require('../../modules/pedido/index.js');
const conta = require('../../modules/conta/index.js');
const pagamento = require('../../fixtures/pagamento.json');
const usuario = require('../../fixtures/usuarios.json');
const produto = require('../../fixtures/produtos.json');

describe('Testes de pedido', () => {
  it('Test Case 15: Place Order: Register before Checkout', () => {
    login.acessarLogin();
    cadastro.iniciarCadastro(usuario.usuario_pedido);
    cadastro.cadastrarUsuario(usuario.usuario_pedido);
    cadastro.validarCadastroRealizado();
    login.validarUsuarioAutenticado(usuario.usuario_pedido.primeiroNome);

    pedido.adicionarProdutoAoCarrinho(produto.produto_1.nome);
    pedido.acessarCarrinho();
    pedido.validarProdutoNoCarrinho(produto.produto_1.nome);
    pedido.clicarNoBotaoDeCheckout();
    pedido.validarDetalhesDoEndereco(usuario.usuario_pedido);
    pedido.preencherComentarioEFazerPedido(usuario.usuario_pedido.comentario);
    pedido.preencherDetalhesDoPagamento(pagamento.cartao_de_credito);
    pedido.confirmarPedido();
    pedido.validarPedidoConfirmado();

    conta.excluirConta();
    conta.validarContaExcluida();
  });
});