// @ts-check
import { expect, test } from '@playwright/test';

test('Teste de login', async ({ page }) => {
  await page.goto('https://front.serverest.dev/login');
  await page.getByTestId('email').click();
  await page.getByTestId('email').fill('Playwright@teste.com');
  await page.getByTestId('senha').click();
  await page.getByTestId('senha').fill('teste123');
  await page.getByTestId('entrar').click();
  await page.locator('#navbarTogglerDemo01').getByRole('img').click();

  // Validação de titulo na aba da pagina
  await expect(page).toHaveTitle(/Front - ServeRest/);

  // Validação de nome de titulo da pagina redirecionada
  await expect(page.locator('h1')).toHaveText(/Serverest Store/);

});

test('Teste barra de navegacao', async({ page }) =>{
  await page.goto('https://front.serverest.dev/login');

  await page.getByTestId('email').click();
  await page.getByTestId('email').fill('Playwright@teste.com');
    await page.getByTestId('senha').click();
  await page.getByTestId('senha').fill('teste123');
  await page.getByTestId('entrar').click();

  // clica no icone home
  await page.getByTestId('home').click();

  // Valida titulo 'Serverest Store' na pagina
  await expect(page.locator('h1')).toHaveText(/Serverest Store/);

  // clica na opcao Lista de Compras
  await page.getByTestId('lista-de-compras').click();

  // Valida titulo 'Lista de Compras' na pagina
  await expect(page.locator('h1')).toHaveText(/Lista de Compras/);

  // Clica na opcao carrinho
  await page.getByTestId('carrinho').click();

  // Valida titulo 'Em construção aguarde' na pagina
  await expect(page.locator('h1')).toHaveText(/Em construção aguarde/i); // o "i" ignora maiúsculas/minúsculas
});