class MyException extends Error {}

function callMe(name) {
	if (name === "Edo") {
		throw new MyException("ups my exception happens");
	} else {
		return "Ok";
	}
}

export { MyException, callMe };
