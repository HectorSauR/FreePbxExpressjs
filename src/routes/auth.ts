import { Router } from "express"
import { AuthController } from "../controllers/auth"
import { checkToken } from "../middlewares/sesion";

const route = Router()

route.post('/validate_token', checkToken);
route.post('/login', AuthController.loginAuth);

export default route