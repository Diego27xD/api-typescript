import {Car} from "../interfaces/car.interface"
import ItemModel from "../models/item"

const getOrders = async () => {
    const responseInsert = await ItemModel.create();
    return responseInsert
}

export {getOrders}
