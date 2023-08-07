import { sum } from "../src/sum.js";

beforeAll(async () => {
	console.info("before all");
});

afterAll(() => {
	console.info("after all");
});

beforeEach(() => {
	console.info("Before Each");
});
afterEach(() => {
	console.info("After Each");
});

test("first test", () => {
	expect(sum(10, 10)).toBe(20);
	console.info("first test");
});

test("second test", () => {
	expect(sum(10, 10)).toBe(20);
	console.info("second test");
});
