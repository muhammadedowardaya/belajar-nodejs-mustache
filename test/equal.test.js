test("test to be", () => {
	const name = "Edo";
	const hello = `Hello ${name}`;

	expect(hello).toBe("Hello Edo");
});

test("test to equal", () => {
	let person = {
		id: "edo",
	};
	Object.assign(person, { name: "Edo" });

	expect(person).toEqual({
		id: "edo",
		name: "Edo",
	});
});
