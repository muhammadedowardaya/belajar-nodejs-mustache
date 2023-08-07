import { MyException, callMe } from "../src/exception.js";

test("exception", () => {
	expect(() => callMe("Edo")).toThrow();
	expect(() => callMe("Edo")).toThrow(MyException);
	expect(() => callMe("Edo")).toThrow(MyException, "ups my exception happens");
});

test("exception not happens", () => {
	expect(callMe("Rudi")).toBe("Ok");
});
