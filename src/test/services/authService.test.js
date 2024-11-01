import { describe } from "@jest/globals";
import AuthService from "../../services/authService.js";
import Usuario from "../../models/usuario.js";
import bcryptjs from "bcryptjs";
const authService = new AuthService();

// Padrao TripleA

describe("Testando a authService.cadastrarUsuario", () => {
  it("O usuario deve possuir um nome, email e senha", async () => {
    // Arrange (informacoes que vao ser validadas)

    const usuarioMock = {
      nome: "Rafael",
      email: "rafael@teste.com.br",
    };

    // Act
    const usuarioSalvo = authService.cadastrarUsuario(usuarioMock);

    // Assert
    await expect(usuarioSalvo).rejects.toThrowError(
      "A senha de usuário é obrigatório!"
    );
  });

  it("A senha do usuário precisa ser criptografada quando for salva no banco de dados", async () => {
    const data = {
      nome: "John Doe",
      email: "johndoe@example.com",
      senha: "senha123",
    };

    const resultado = await authService.cadastrarUsuario(data);
    const senhaIguais = await bcryptjs.compare(
      "senha123",
      resultado.content.senha
    );

    expect(senhaIguais).toStrictEqual(true);

    await Usuario.excluir(resultado.content.id);
  });

  it.skip("Não pode ser cadastrado um usuário com e-mail duplicado", async () => {
    const usuarioMock = {
      nome: "Raphael",
      email: "teste@gmail.com",
      senha: "123456",
    };

    const usuarioSave = authService.cadastrarUsuario(usuarioMock);

    await expect(usuarioSave).rejects.toThrowError(
      "O email já esta cadastrado!"
    );
  });

  it("Ao cadastrar um usuário deve ser retornada uma mensagem informando que o usuário foi cadastrado", async () => {
    const data = {
      nome: "John Doe",
      email: "johndoe@example.com",
      senha: "senha123",
    };

    const resultado = await authService.cadastrarUsuario(data);

    expect(resultado.message).toEqual("usuario criado");

    await Usuario.excluir(resultado.content.id);
  });

  it("Ao cadastrar um usuário, validar o retorno das informações do usuário", async () => {
    const data = {
      nome: "John Doe",
      email: "johndoe@example.com",
      senha: "senha123",
    };

    const resultado = await authService.cadastrarUsuario(data);
    expect(resultado.content).toMatchObject(data);
    await Usuario.excluir(resultado.content.id);
  });
});