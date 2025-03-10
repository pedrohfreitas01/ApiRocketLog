import { DeliveriesController } from "@/controllers/delivery-controller";
import { ensureAuthenticated } from "@/middlewares/ensure-authcated";
import { Router } from "express";

const deliveriesRoutes = Router()
const deliveriesController = new DeliveriesController()

deliveriesRoutes.use(ensureAuthenticated)
deliveriesRoutes.post("/", deliveriesController.create)


export { deliveriesRoutes };