import {Router} from "express"
import { getItems } from "../controllers/order";
import { multerMiddleware } from "../middlewares/file";
import { checkJwt } from "../middlewares/session";

/**
 * Esta ruta solo puede acceder las personas que tienen sesion activa
 * que tenga un jwt valido
 */

const router = Router();

router.get('/', checkJwt, multerMiddleware.single("myfile"), getItems)

export {router}