import { expect, test } from '@playwright/test';

test('Index page has expected title', async ({ page }) => {
  await page.goto('/');
  expect(await page.textContent('a')).toBe('Anton Bossenbroek');
});
