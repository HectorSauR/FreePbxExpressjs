import { Router } from "express";
import calls from "./calls";

const routes = Router();

routes.use("/calls", calls);

export default routes;