const { expect } = require("@playwright/test");

exports.HomePage = class HomePage {
    constructor(page) {
        this.page = page;
        this.botaoHome = page.getByTestId('home');
        this.botaoListaCompra = page.getByTestId('lista-de-compras');
        this.botaoCarrinho = page.getByTestId('carrinho');
        this.barraPesquisa = page.getByTestId('pesquisar');
        this.botaoPesquisar = page.getByTestId('botaoPesquisar');
    };

        async clicarEverificarBotaoHome() {
            await this.botaoHome.click();
            try{
                await expect(this.page.locator('h1')).toHaveText(/Serverest Store/);
                return true;
            } catch(error){
                console.error("Validação falhou: ", error);
                return false;
            }
        };

        async clicarEverificarBotaoListaCompras() {
            await this.botaoListaCompra.click();
            try{
                await expect(this.page.locator('h1')).toHaveText(/Lista de Compras/);
                return true;
            } catch(error) {
                console.error("Validação Lista de Compras falhou", error);
                return false;
            };
        };

        async clicarEverificarBotaoCarrinho() {
            await this.botaoCarrinho.click();
            try {
                await expect(this.page.locator('h1')).toHaveText(/Em construção aguarde/i); // o "i" ignora maiúsculas/minúsculas
                return true;
            } catch(error) {
                console.error("Validação botão carrinho falhou", error);
                return false;
            };
        };

        async realizarPesquisaProdutos() {
            await this.barraPesquisa.fill('ball');
            await this.botaoListaCompra.click();
            await expect(this.page.getByRole('heading', { name: 'Produtos' })).toBeVisible();

            // await expect(this.page.locator('div')).toHaveText(/Produtos/);
        }
};
