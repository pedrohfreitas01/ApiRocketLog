import { UserController } from "@/controllers/users-controllers";
import { Router } from "express";

const usersRoutes = Router();
const usersController = new UserController();

usersRoutes.post("/", usersController.create);

export { usersRoutes };
