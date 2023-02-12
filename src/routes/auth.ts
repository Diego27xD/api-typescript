import { Router, Request, Response } from "express";
import {registerCtrl, loginCtrl} from "../controllers/auth"

const router = Router();
/**
 * https://localhost:3000/items/
 */
router.post('/register', registerCtrl);
router.post('/login', loginCtrl);

export {router}