import { Request, Response } from "express"
import { getCar, getCars, insertCar, updateCar, deleteCar } from "../services/insertItem"
import { handleHttp } from "../utils/error.handle"
const getItem=async({params}: Request, res: Response)=>{
    try {
        const {id} = params;
        const response = await getCar(id)
        const data = response ? response: "Not found"
        res.send(data)
    } catch (error) {
        handleHttp(res,"Error en el getItem", error)
    }
}

const getItems = async (req: Request, res: Response) => {
    try {
        const response = await getCars();
        res.send(response)
    } catch (error) {
        handleHttp(res,"Error GET ITEMS")
    }
}

const postItem= async ({body}: Request, res: Response)=>{

    try {
        const responseItem = await insertCar(body)
        res.send(responseItem)
    } catch (error) {
        handleHttp(res,"Error POST ITEMS",error)
    }
}

const putItem=async({params, body}: Request, res: Response)=>{
    try {
        const {id} = params;
        const responseItem = await updateCar(id, body);
        res.send(responseItem)
    } catch (error) {
        handleHttp(res,"Error PUT ITEMS", error)
    }
}

const deleteItem=async({params}: Request, res: Response)=>{
    try {
        const {id} = params;
        const response = await deleteCar(id)
        res.send(response)
    } catch (error) {
        handleHttp(res,"Error Delete Item", error)
    }
}
export {
    getItem,
    getItems,
    postItem,
    putItem,
deleteItem}