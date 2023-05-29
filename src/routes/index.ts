import { Router } from "express";
import calls from "./calls";
import auth from "./auth";

const routes = Router();

routes.use("/auth", auth);
routes.use("/calls", calls);

export default routes;