const handle = promise => {
	return promise.then(data => [null, data]).catch(error => [error, undefined]);
};
class BadRequestError extends Error {
	constructor(statusCode, message) {
		super();
		this.statusCode = statusCode;
		this.massage = massage;
	}
}

module.exports = {
	handle,
	BadRequestError,
}