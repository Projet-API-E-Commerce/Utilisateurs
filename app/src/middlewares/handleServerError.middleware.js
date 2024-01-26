import { sendErrorResponse } from "../utils/middlewares.util.js";

const handleServerError = (err, req, res, next) => {
	console.error(err);
	sendErrorResponse(req, res, 500, "Internal server error");
};

export default handleServerError;
