// NOTE - Imports
import { Router } from "express";
import RoleController from "../controllers/role.controller.js";
import { authenticateToken } from "../middlewares/jwtAuthentication.middleware.js";

const roleRouter = Router();
// roleRouter.use(authenticateToken);

// NOTE - Routes
roleRouter.post("/roles", RoleController.createRole);
roleRouter.get("/roles", RoleController.getAllRoles);
roleRouter.get("/roles/:id", RoleController.getRoleById);
roleRouter.put("/roles/:id", RoleController.updateRole);
roleRouter.delete("/roles/:id", RoleController.deleteRole);

roleRouter.routerName = "roleRouter";
export default roleRouter;
