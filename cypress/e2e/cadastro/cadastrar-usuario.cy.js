const cadastro = require('../../modules/cadastro/index');
const menu = require('../../modules/menu/index');

const { faker } = require('@faker-js/faker');

function criarUsuario() {
  const nascimento = faker.date.birthdate({ min: 18, max: 80, mode: 'age' });

  return {
    primeiroNome: faker.person.firstName(),
    sobrenome: faker.person.lastName(),
    email: faker.internet.email(),
    genero: faker.person.sex(),
    senha: faker.internet.password(),
    dia: String(nascimento.getDate()),
    mes: nascimento.toLocaleString('en-US', { month: 'long' }),
    ano: String(nascimento.getFullYear()),
    newsletter: faker.datatype.boolean(),
    specialOffers: faker.datatype.boolean(),
    empresa: faker.company.name(),
    endereco: faker.location.streetAddress(),
    pais: 'United States',
    estado: 'California',
    cidade: 'San Francisco',
    cep: faker.location.zipCode(),
    telefone: faker.phone.number(),
  };
}

describe('Testes de cadastro de usuário', () => {
  it('deve cadastrar um novo usuário', () => {
    const usuario = criarUsuario();

    menu.acessarPaginaLoginECadastro();
    cadastro.iniciarCadastro(usuario);
    cadastro.cadastrarUsuario(usuario);
    cadastro.validarCadastroRealizado();
  });
});
