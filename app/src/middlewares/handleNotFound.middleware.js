import { sendErrorResponse } from "../utils/middlewares.util.js";

const handleNotFound = (req, res, next) => {
	sendErrorResponse(req, res, 404, "Not found");
};

export default handleNotFound;
