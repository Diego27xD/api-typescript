import {Router} from "express"
import { getItems } from "../controllers/order";
import { checkJwt } from "../middlewares/session";

/**
 * Esta ruta solo puede acceder las personas que tienen sesion activa
 * que tenga un jwt valido
 */

const router = Router();

router.get('/', checkJwt, getItems)

export {router}