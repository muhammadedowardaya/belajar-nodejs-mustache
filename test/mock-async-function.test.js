import { getBalance } from "../src/async";

test("mock async function", async () => {
	const from = jest.fn();
	from.mockResolvedValueOnce(1000);

	await expect(getBalance("Edo", from)).resolves.toEqual({
		name: "Edo",
		balance: 1000,
	});

	expect(from.mock.calls.length).toBe(1);
	await expect(from.mock.results[0].value).resolves.toBe(1000);
});

test.failing("mock async function rejected", async () => {
	const from = jest.fn();
	from.mockRejectedValueOnce(new Error("ups"));

	await getBalance("Edo", from);
});

test("mock async function error matcher", async () => {
	const from = jest.fn();
	from.mockRejectedValueOnce("Rejected");

	expect(getBalance("Edo", from)).rejects.toBe("Rejected");
});
