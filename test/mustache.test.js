import Mustache from "mustache";
import fs from "fs/promises";

test("Menggunakan Mustache", () => {
	const data = Mustache.render("Hello {{name}}", { name: "Edo" });

	expect(data).toBe("Hello Edo");
});

test("Menggunakan Mustache Cache", () => {
	Mustache.parse("Hello {{name}}");

	const data = Mustache.render("Hello {{name}}", { name: "Edo" });

	expect(data).toBe("Hello Edo");
});

test("Tags", () => {
	const data = Mustache.render("Hello {{name}}, my hobby is {{{hobby}}}", {
		name: "Edo",
		hobby: "<b>Programming</b>",
	});

	expect(data).toBe("Hello Edo, my hobby is <b>Programming</b>");
});

test("Nested Object", () => {
	const data = Mustache.render("Hello {{person.name}}", {
		person: {
			name: "Edo",
		},
	});

	expect(data).toBe("Hello Edo");
});

test("Mustache File", async () => {
	const helloTemplate = await fs
		.readFile(__dirname + "/../templates/hello.mustache")
		.then((data) => data.toString());

	const data = Mustache.render(helloTemplate, {
		title: "Welcome",
	});

	console.info(data);

	expect(data).toContain("Welcome");
});

test("Mustache Section Not Show", async () => {
	const helloTemplate = await fs
		.readFile(__dirname + "/../templates/person.mustache")
		.then((data) => data.toString());

	const data = Mustache.render(helloTemplate, {});

	console.info(data);

	expect(data).not.toContain("Hello Person");
});

test("Mustache Section Show", async () => {
	const helloTemplate = await fs
		.readFile(__dirname + "/../templates/person.mustache")
		.then((data) => data.toString());

	const data = Mustache.render(helloTemplate, {
		person: {
			name: "Edo",
		},
	});

	console.info(data);

	expect(data).toContain("Hello Person");
});

test("Mustache Section Data", async () => {
	const helloTemplate = await fs
		.readFile(__dirname + "/../templates/person.mustache")
		.then((data) => data.toString());

	const data = Mustache.render(helloTemplate, {
		person: {
			name: "Edo",
		},
	});

	console.info(data);

	expect(data).toContain("Hello Person Edo!");
});

test("Inverted Sections", async () => {
	const helloTemplate = await fs
		.readFile(__dirname + "/../templates/person.mustache")
		.then((data) => data.toString());

	const data = Mustache.render(helloTemplate, {});

	console.info(data);

	expect(data).toContain("Hello Guest");
});

test("List", async () => {
	const helloTemplate = await fs
		.readFile(__dirname + "/../templates/hobbies.mustache")
		.then((data) => data.toString());

	const data = Mustache.render(helloTemplate, {
		hobbies: ["Coding", "Gaming", "Reading"],
	});

	console.info(data);

	expect(data).toContain("Coding");
	expect(data).toContain("Gaming");
	expect(data).toContain("Reading");
});

test("List Object", async () => {
	const helloTemplate = await fs
		.readFile(__dirname + "/../templates/students.mustache")
		.then((data) => data.toString());

	const data = Mustache.render(helloTemplate, {
		students: [
			{
				name: "Edo",
				value: 100,
			},
			{
				name: "Eko",
				value: 95,
			},
		],
	});

	console.info(data);

	expect(data).toContain("Edo");
	expect(data).toContain("Eko");
	expect(data).toContain("100");
	expect(data).toContain("95");
});

test("Functions", async () => {
	const parameter = {
		name: "Edo",
		upper: () => {
			return (text, render) => {
				return render(text).toUpperCase();
			};
		},
	};

	const data = Mustache.render("Hello {{#upper}}{{name}}{{/upper}}", parameter);

	console.info(data);
});

test("Comment", async () => {
	const helloTemplate = await fs
		.readFile(__dirname + "/../templates/comment.mustache")
		.then((data) => data.toString());

	const data = Mustache.render(helloTemplate, {
		title: "Edo",
	});

	console.info(data);

	expect(data).toContain("Edo");
	expect(data).not.toContain("Ini Komentar");
});

test("Partials", async () => {
	const contentTemplate = await fs
		.readFile(__dirname + "/../templates/content.mustache")
		.then((data) => data.toString());
	const headerTemplate = await fs
		.readFile(__dirname + "/../templates/header.mustache")
		.then((data) => data.toString());
	const footerTemplate = await fs
		.readFile(__dirname + "/../templates/footer.mustache")
		.then((data) => data.toString());

	const data = Mustache.render(contentTemplate, {
		title: "Edo",
        content:"Belajar Mustache JS"
	},{
        header:headerTemplate,
        footer:footerTemplate
    });

	console.info(data);

	expect(data).toContain("Edo");
	expect(data).toContain("Belajar Mustache JS");
	expect(data).toContain("Powered by Muhammad Edo Wardaya");
});
