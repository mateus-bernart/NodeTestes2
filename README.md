# API Livraria

![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN)

## Resumo do projeto

Projeto de API REST para prática de JavaScript.
Livraria com sistema de cadastro e manejo de livros, autores,editoras e usuários.

## Testes

- Padrão Triple A.
- Teste de Unidade (Caixa Branca)
- Teste de Integração (através de requisições da API) (Caixa Preta)
- Teste de banco de dados, inserindo um registro e depois verificando sua existência (previnindo possíveis erros em ambiente de produção)
- Limpar a base de dados da API para evitar dados de testes em ambiente de produção;

## Stack utilizada

- `Node.js` v16.14.2
- `express` v4.18.1,
- `knex` v2.1.0
- `sqlite3` v5.0.8

### Endpoints

A API expõe os seguintes _endpoints_ a partir da _base URL_ `localhost:3000`:

`/auth`

- `POST /login`
- `POST /cadastrar`

`/livros`

- `GET /livros`
- `GET /livros/:id`
- `POST /livros`
- `PUT /livros/:id`
- `DELETE /livros/:id`

`/autores`

- `GET /autores`
- `GET /autores/:id`
- `GET /autores/:id/livros`
- `POST /autores`
- `PUT /autores/:id`
- `DELETE /autores/:id`

`/editoras`

- `GET /editoras`
- `GET /editoras/:id`
- `GET /editoras/:id/livros`
- `POST /editoras`
- `PUT /editoras/:id`
- `DELETE /editoras/:id`

`/aluguel-livro`

- `GET /aluguel-livro`
- `GET /aluguel-livro/:id`
- `POST /aluguel-livro`
- `GET /aluguel-livro/devolver/:id`
- `DELETE /aluguel-livro/:id`

`/livros-imagens`

- `GET /livros-imagens`
- `GET /livros-imagens/:id`
- `POST /livros-imagens`
- `PUT /livros-imagens/:id`
- `DELETE /livros-imagens/:id`

`/usuarios`

- `GET /usuarios`
- `GET /usuarios/:id`
- `PUT /usuarios/:id`
- `DELETE /usuarios/:id`
