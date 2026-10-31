const usuario = require('../../fixtures/usuarios.json');
const login = require('../../modules/login/index.js');

describe('Testes de login', () => {
  it('Test Case 2: Login User with correct email and password', () => {
    login.acessarLogin();
    login.efetuarLogin(usuario.usuario_cadastrado.email, usuario.usuario_cadastrado.senha);
    login.validarUsuarioAutenticado(usuario.usuario_cadastrado.nome);
  });

});
