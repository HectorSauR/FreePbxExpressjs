import { Router } from "express"
import { CallsController } from "../controllers/calls";
import { checkToken } from "../middlewares/sesion";

const route = Router()

route.get('/', checkToken, CallsController.getAll);

export default route