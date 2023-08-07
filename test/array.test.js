test("array", () => {
	const names = ["Muhammad", "Edo", "Wardaya"];
	expect(names).toContain("Wardaya");
	expect(names).toEqual(["Muhammad", "Edo", "Wardaya"]);

	const persons = [
		{
			name: "Muhammad",
		},
		{
			name: "Edo",
		},
	];

	expect(persons).toContainEqual({ name: "Muhammad" });
	expect(persons).toEqual([
		{
			name: "Muhammad",
		},
		{
			name: "Edo",
		},
	]);
});
