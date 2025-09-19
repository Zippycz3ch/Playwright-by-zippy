import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://qa-hd-cd.hg.dir/');
  await page.getByRole('link', { name: 'Česká republika' }).click();
  await page.getByRole('link', { name: 'Produkty' }).click();
  await expect(page.locator('#main')).toMatchAriaSnapshot(`
    - list:
      - listitem:
        - link "Domovská stránka":
          - /url: /cs-cz/
        - img
      - listitem: Produkty
    - heading "Nejoblíbenější produkty" [level=1]
    - paragraph
    - heading "Ria ultra vložky za polovinu!" [level=2]
    - paragraph
    - heading "Objevte naše novinky" [level=1]
    - paragraph
    `);
  await expect(page.getByRole('banner')).toMatchAriaSnapshot(`
    - text: Doprava zdarma na všechny objednávky
    - list:
      - listitem:
        - link "Články":
          - /url: /cs-cz/clanky
      - listitem:
        - link "Vše o nákupu":
          - /url: /cs-cz/vse-o-nakupu
      - listitem:
        - link "Registrace":
          - /url: /cs-cz/prihlaseni/vyber-registrace
      - listitem:
        - link "Přihlásit se":
          - /url: /cs-cz/prihlaseni
    `);
  await page.getByRole('link', { name: 'HARTMANN Veroval baby bezdotykový teploměr stříbrný, 1 /' }).click();
  await page.getByRole('button', { name: 'Přidat do košíku' }).click();
  await page.getByRole('link', { name: 'Dokončit objednávku' }).click();
  await page.goto('https://qa-hd-cd.hg.dir/cs-cz/kosik');
  await page.getByRole('button', { name: 'Dokončit objednávku' }).click();
  await page.getByRole('textbox', { name: 'E-mail' }).click();
  await page.getByRole('textbox', { name: 'E-mail' }).fill('blabla@bla.bz');
  await page.getByRole('button', { name: 'Pokračovat' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Heureka.cz - ověřené hodnocen' }).click();
  const page1 = await page1Promise;
  await page1.locator('html').click({
    button: 'right'
  });
  await page1.getByText('× Dáte nám souhlas s využíván').click();
  await page1.getByText('× Dáte nám souhlas s využíván').click();
});