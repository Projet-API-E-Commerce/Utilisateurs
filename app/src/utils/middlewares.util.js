export const sendErrorResponse = (req, res, statusCode, message) => {
	if (req.accepts("json")) {
		res.json({ statusCode: statusCode, error: message });
		return;
	}

	res.type("txt").send(`${statusCode} ${message}`);
};
