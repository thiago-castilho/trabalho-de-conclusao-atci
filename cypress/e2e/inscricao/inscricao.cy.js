const inscricao = require('../../modules/inscricao/index.js');

const usuario = require('../../fixtures/usuarios.json');

describe('Testes de inscrição', () => {
  it('Test Case 10: Verify Subscription in home page', () => {
    inscricao.acessarPaginaDeInscricao();
    inscricao.preencherFormularioDeInscricao(usuario.usuario_cadastrado.email);
    inscricao.validarResultadoDaInscricao();
  });
});
