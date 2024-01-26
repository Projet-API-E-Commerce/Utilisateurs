// NOTE - Imports
import { Router } from "express";
import UserController from "../controllers/user.controller.js";
import { authenticateToken } from "../middlewares/jwtAuthentication.middleware.js";

const userRouter = Router();
// userRouter.use(authenticateToken);

// NOTE - Routes
userRouter.post("/users", UserController.createUser);
userRouter.get("/users", UserController.getAllUsers);
userRouter.get("/users/:id", UserController.getUserById);
userRouter.put("/users/:id", UserController.updateUser);
userRouter.delete("/users/:id", UserController.deleteUser);

userRouter.routerName = "userRouter";
export default userRouter;
