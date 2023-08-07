beforeAll(() => console.info("before All outer"));
afterAll(() => console.info("after All outer"));
beforeEach(() => console.info("after each outer"));
afterEach(() => console.info("after each outer"));

test("Test Outer", () => console.info("Test Outer"));

describe("Inner", () => {
	beforeEach(() => console.info("after each inner"));
	afterEach(() => console.info("after each inner"));
	test("Test Inner", () => console.info("test inner"));
});

describe("Inner 2", () => {
	beforeEach(() => console.info("after each inner"));
	afterEach(() => console.info("after each inner"));
	test("Test Inner", () => console.info("test inner"));
});
