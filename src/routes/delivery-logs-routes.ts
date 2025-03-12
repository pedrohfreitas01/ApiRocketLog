import { LogsDeliveryController } from "@/controllers/logs-delivery-controller";
import { ensureAuthenticated } from "@/middlewares/ensure-authcated";
import { verifyUserAuthorization } from "@/middlewares/verifyUserAuthor";
import { Router } from "express";

const deliveryLogsRoutes = Router();
const deliveryLogsController = new LogsDeliveryController();

deliveryLogsRoutes.post(
  "/",
  ensureAuthenticated,
  verifyUserAuthorization(["sale"]),
  deliveryLogsController.create
);

deliveryLogsRoutes.get("/:delivery_id/show", ensureAuthenticated, verifyUserAuthorization(["sale", "customer"]), deliveryLogsController.show)


export {deliveryLogsRoutes}