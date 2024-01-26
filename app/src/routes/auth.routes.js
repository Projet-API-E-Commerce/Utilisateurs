// NOTE - Imports
import { Router } from "express";
import AuthController from "../controllers/auth.controller.js";

const authRouter = Router();

// NOTE - Routes
authRouter.post("/login", AuthController.login);
authRouter.post("/verify-token", AuthController.verifyToken);

authRouter.routerName = "authRouter";
export default authRouter;
