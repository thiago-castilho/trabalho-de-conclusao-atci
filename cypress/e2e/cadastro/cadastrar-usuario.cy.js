const cadastro = require('../../modules/cadastro/index.js');
const login = require('../../modules/login/index.js');
const conta = require('../../modules/conta/index.js');

const usuario = require('../../fixtures/usuarios.json');

describe('Testes de cadastro de usuário', () => {
  it('Test Case 1: Resgister User', () => {
    login.acessarLogin();
    cadastro.iniciarCadastro(usuario.usuario_nao_cadastrado);
    cadastro.cadastrarUsuario(usuario.usuario_nao_cadastrado);
    cadastro.validarCadastroRealizado();
    conta.excluirConta();
    conta.validarContaExcluida();
  });
});
