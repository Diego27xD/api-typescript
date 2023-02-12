import { Router, Request, Response } from "express";
import {getItems, getItem, postItem, putItem, deleteItem} from "../controllers/item"
import { logMiddleware } from "../middlewares/log";
const router = Router();
/**
 * https://localhost:3000/items/
 */
router.get('/', getItems )
router.get('/:id', logMiddleware,getItem)
router.post('/', postItem)
router.put('/:id', putItem)
router.delete('/:id', deleteItem)
export {router}