### 🛠  Como instalar o projeto 

- `npm init playwright@latest` -> instala o Playwright e cria os arquivos iniciais necessários (ex.: playwright.config.js, pastas de testes, etc).

### 🔍 Como executar os testes

- `npx playwright test` -> Executa todos os testes localizados na pasta padrão de testes

- `npx playwright test tests/login.spec.js` -> Executa apenas o arquivo de teste específico indicado (tests/login.spec.js).

- `npx playwright test --ui` ->Abre a interface gráfica do Playwright Test Runner, permitindo selecionar e executar testes manualmente e visualizar os resultados em tempo real.

- `npx playwright test tests/home.spec.js` -> Usando `test.only` em um teste especifico, você consegue executar apenas ele diante de outros testes dentro do mesmo arquivo.
* Exemplo:  
  Ao invés de:
  ```javascript
  test('deve exibir o título', async ({ page }) => {
  });
  Usa-se:
  test.only('deve adicionar item ao carrinho', async ({ page }) => {
});



## ⚡ Extra

- `npx playwright test --debug` -> Utilizado para executar os testes em modo de depuração (debug). Permite gravar os passos para gera uma automação.

- `npx playwright codegen <url>` ->  abre um navegador controlado pelo Playwright e grava as ações que você realiza. Enquanto você interage com a página, o Playwright gera automaticamente o código para reproduzir essas ações.
