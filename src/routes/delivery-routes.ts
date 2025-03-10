import { DeliveriesController } from "@/controllers/delivery-controller";
import { ensureAuthenticated } from "@/middlewares/ensure-authcated";
import { verifyUserAuthorization } from "@/middlewares/verifyUserAuthor";
import { Router } from "express";

const deliveriesRoutes = Router()
const deliveriesController = new DeliveriesController()

deliveriesRoutes.use(
  ensureAuthenticated,
  verifyUserAuthorization(["sale"])
);
deliveriesRoutes.post("/", deliveriesController.create)


export { deliveriesRoutes };

