import express,{Router} from "express";
import { HealtCheckController } from "./Controllers/HealthCheckController";
import { UserController } from "./Controllers/UserController";

export const router:Router = express.Router();

//userController
router.get("/api/user/list", new UserController().listUsers);
router.post("/api/user", new UserController().createUser);
router.get("/api/user/:userId", new UserController().readUser);
router.put("/api/user/:userId", new UserController().updateUser);
router.delete("/api/user/:userId", new UserController().deleteUser);

//healtcheckController
router.get("/api/health/database",new HealtCheckController().checkDatabaseConnection);