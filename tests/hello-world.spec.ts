test('hello world', async ({ page }) => {
	await page.goto('http://localhost:3000');
	const element = await page.locator('selector-for-element').isVisible();
	expect(element).toBe(true);
});