export const sayHelloAsync = (name) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (name) {
				resolve(`Hello ${name}`);
			} else {
				reject("Name is empty");
			}
		});
	});
};

export const getBalance = async (name, from) => {
	const balance = await from();
	return {
		name: name,
		balance: balance,
	};
};
