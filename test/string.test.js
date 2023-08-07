test("string", () => {
	const name = "Muhammad Edo Wardaya";
	expect(name).toBe("Muhammad Edo Wardaya");
	expect(name).toEqual("Muhammad Edo Wardaya");
	expect(name).toMatch(/daya/);
});
