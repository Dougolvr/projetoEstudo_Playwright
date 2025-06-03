const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../page-objects/LoginPage');
const { usuarioValido, usuarioInvalido } = require('../utils/credentials');

test('Usuário deve conseguir fazer login com credenciais válidas', async({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.realizaLogin(usuarioValido.email, usuarioValido.senha);

    console.log('Login realizado com sucesso!');

    //validação ao concluir o login
    await expect(page).toHaveTitle(/Front - ServeRest/);
    console.log('Validação feita!')
});

test('Usuario não deve coonseguir realizar o login com credenciais invalidas', async({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.realizaLogin(usuarioInvalido.email, usuarioInvalido.senha);

    console.log('Erro ao fazer login.');

    // Validacao de erro ao fazer login com dados inválidos
    await expect(page.getByText(/Email e\/ou senha inválidos/i)).toBeVisible(); //   o \/ escapa a /, dizendo ao interpretador que é uma barra literal, e não o fim da regex.
    console.log('Validação de erro identificada.')
});