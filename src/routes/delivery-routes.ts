import { DeliveriesController } from "@/controllers/delivery-controller";
import { StatusDeliveryController } from "@/controllers/status-delivery-controller";
import { ensureAuthenticated } from "@/middlewares/ensure-authcated";
import { verifyUserAuthorization } from "@/middlewares/verifyUserAuthor";
import { Router } from "express";

const deliveriesRoutes = Router();
const deliveriesController = new DeliveriesController();
const statusDeliveryController = new StatusDeliveryController()

deliveriesRoutes.use(ensureAuthenticated, verifyUserAuthorization(["sale"]));
deliveriesRoutes.post("/", deliveriesController.create);
deliveriesRoutes.get("/", deliveriesController.index);

deliveriesRoutes.patch("/:id/status", statusDeliveryController.update);

export { deliveriesRoutes };
