# Trabalho de conclusão — Automação de Testes na Camada de Interface (Web)

Projeto da turma PGATS-2026-02. Automatizei os casos 1, 2, 3, 4, 5, 8, 9, 10, 15 e 16 da [Automation Exercise](https://www.automationexercise.com/) com Cypress.

O enunciado e o que entra na avaliação estão no [DESAFIO.md](DESAFIO.md). A forma de organizar os testes segue o que vimos em aula, em [docs/diretrizes-arquitetura-projeto-v3.1.md](docs/diretrizes-arquitetura-projeto-v3.1.md).

## Como rodar

Precisa do Node.js 24.

```bash
npm install
npm test
```

`npm test` abre o Cypress. Para executar a suíte no Chrome, do jeito que a pipeline faz:

```bash
npm run test:ci
```

O relatório do Mochawesome sai em `cypress-mochawesome-reporter`.

## O que tem em cada pasta

A spec descreve o cenário. O módulo é quem mexe na tela.

| Pasta | O que fica |
| --- | --- |
| `cypress/e2e` | Um arquivo por funcionalidade: cadastro, login, logout, produtos, inscrição e pedido |
| `cypress/modules` | Ações, seletores e validações de cada funcionalidade |
| `cypress/fixtures` | Usuários, produto e dados do cartão |

Os casos ficaram assim:

- `cadastro.cy.js`: casos 1 e 5
- `login.cy.js`: casos 2 e 3
- `logout.cy.js`: caso 4
- `produtos.cy.js`: casos 8 e 9
- `inscricao.cy.js`: caso 10
- `pedido.cy.js`: casos 15 e 16

## Massa

Duas contas já existem no site e os testes não apagam:

- `thiagocastilho@trabalhofinal.com`, usada no login, no logout e na inscrição
- `pedido.login@trabalhofinal.com`, usada no caso 16

O caso 1 e o caso 15 criam a conta durante o teste e excluem no final. O caso 3 usa um e-mail que não está cadastrado.

## Pipeline

O workflow `.github/workflows/pipeline-execution.yaml` dispara no push da `main` e também manualmente. Ele instala as dependências, roda `npm run test:ci` e publica o relatório como artifact.
