const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../page-objects/LoginPage');
const { HomePage } = require('../page-objects/HomePage');
const { usuarioValido } = require('../utils/credentials');

// TESTE 1
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

// TESTE 2
test("Usuario deve pesquisar por produtos", async({ page }) => {
    const login = new LoginPage(page);
    const home = new HomePage(page);

    // dado que o usuario esta logado no sistema
    await login.goto();
    await login.realizaLogin(usuarioValido.email, usuarioValido.senha);

    // quando ele faz a pesquisa por um produto válido
    await home.realizarPesquisaProdutos();
    console.log('pesquisa feita')
    // então o resultado da busca deve retornar
});



// COM ERRO NA EXECUÇÃO DESSE TESTE. VERIFICAR ‼️‼️‼️

// TEST 3
test.only("Usuario deve pesquisar um produto e adiciona-lo na página", async({ page }) =>{
    const login = new LoginPage(page);
    const home = new HomePage(page);

    // dado que o usuario esta logado no sistema
    await login.goto();
    await login.realizaLogin(usuarioValido.email, usuarioValido.senha);
    console.log("login realizado ✅")
    // quando ele faz uma busca de produto e clica em "adicionar a lista"
    await home.realizarPesquisaProdutos();
    await home.clicarBotaoAdicionarALista();
    console.log("Produto adicionado a lista de compras ✅")
    // entao deve ser redirecionado para a pagina de Lista de Compras com o produto adiconado
    console.log("Validando redirecionamento 🔍...")
    await home.verificaPaginaListaCompras();
    console.log("Validação feita ✅")
})