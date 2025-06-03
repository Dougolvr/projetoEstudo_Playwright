const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../page-objects/LoginPage');
const { HomePage } = require('../page-objects/HomePage');
const { usuarioValido } = require('../utils/credentials');

test('Usuario deve conseguir navegar na barra de tarefas', async({ page }) => {
    const login = new LoginPage(page);
    const home = new HomePage(page);

    // dado que o usuario esta logado
    await login.goto();
    await login.realizaLogin(usuarioValido.email, usuarioValido.senha);
    console.log("login realizado")

    // quando ele navega sobre a barra de navegacao
    const resultHome = await home.clicarEverificarBotaoHome();
        console.log("clicou em home")

    const resultCompras = await home.clicarEverificarBotaoListaCompras();
        console.log("clicou em lista")

    const resultCarrinho = await home.clicarEverificarBotaoCarrinho();
        console.log("clicou em carrinho")


    // Entao os elementos de cada pagina deve ser verificado
    expect(resultHome).toBe(true);
    expect(resultCompras).toBe(true);
    expect(resultCarrinho).toBe(true);
    
    console.log("Validações feitas!")
});