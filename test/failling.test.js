import { sayHello } from "../src/sayHello";

test("sayHello success", () => {
	expect(sayHello("Edo")).toBe("Hello Edo");
});

test.failing("sayHello error", () => {
	sayHello(null);
});

test("sayHello error matchers", () => {
	expect(() => sayHello(null)).toThrow();
});
