const usuario = require('../../fixtures/usuarios.json');
const login = require('../../modules/login/index.js');
const logout = require('../../modules/logout/index.js');

describe('Testes de logout', () => {
  beforeEach(() => {
    login.acessarLogin();
    login.efetuarLogin(usuario.usuario_cadastrado.email, usuario.usuario_cadastrado.senha);
    login.validarUsuarioAutenticado(usuario.usuario_cadastrado.primeiroNome);
  });

  it('Test Case 4: Logout User', () => {
    logout.efetuarLogout();
    logout.validarRetornoParaLogin();
  });
});
