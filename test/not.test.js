test("not test", () => {
	const value = 2 + 2;

	expect(value).not.toBeGreaterThan(4);
	expect(value).not.toBeGreaterThanOrEqual(5);
	expect(value).not.toBeLessThan(3);
	expect(value).not.toBeLessThanOrEqual(3);
	expect(value).not.toBe(5);
});
