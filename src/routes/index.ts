import { Router } from "express";
import { usersRoutes } from "./users-routes";
import { sessionRoutes } from "./session-routes";
import { deliveriesRoutes } from "./delivery-routes";
import { deliveryLogsRoutes } from "./delivery-logs-routes";


const routes = Router();
routes.use("/users", usersRoutes);
routes.use("/session", sessionRoutes);

routes.use("/deliveries", deliveriesRoutes);
routes.use("/delivery-logs", deliveryLogsRoutes);

export { routes };

