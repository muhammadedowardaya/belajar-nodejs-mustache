import { sayHelloAsync } from "../src/async";

test("test async function", async () => {
	// const result = await sayHelloAsync("Edo");
	// expect(result).toBe("Hello Edo");
	await expect(sayHelloAsync("Edo")).resolves.toBe("Hello Edo");
	await expect(sayHelloAsync()).rejects.toBe("Name is empty");
});
