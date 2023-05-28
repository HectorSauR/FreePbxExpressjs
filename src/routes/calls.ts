import { Router } from "express"
import { CallsController } from "../controllers/calls";

const route = Router()

route.get('/', CallsController.getAll);

export default route