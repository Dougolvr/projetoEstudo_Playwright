exports.LoginPage = class LoginPage {
    constructor(page) {
        this.page = page;
        this.campoEmail = page.getByTestId('email');
        this.campoSenha = page.getByTestId('senha');
        this.botaoLogin = page.getByTestId('entrar');
    };

    // Navega ate a url
    async goto() {
        await this.page.goto('https://front.serverest.dev/login');
    };
    
    // realizar o login na pagina
    async realizaLogin(email, senha) {
        await this.campoEmail.fill(email);
        await this.campoSenha.fill(senha);
        await this.botaoLogin.click();
    };
};