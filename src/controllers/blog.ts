import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle"
const getblog=(req: Request, res: Response)=>{
    try {
        
    } catch (error) {
        handleHttp(res,"Error en el getblog")
    }
}

const getblogs = (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        handleHttp(res,"Error GET blogs")
    }
}

const postblog=(req: Request, res: Response)=>{
    try {
        res.send(req.body)
    } catch (error) {
        handleHttp(res,"Error POST blogs")
    }
}

const putblog=(req: Request, res: Response)=>{
    try {
        
    } catch (error) {
        handleHttp(res,"Error PUT blogs")
    }
}

const deleteblog=(req: Request, res: Response)=>{
    try {
        
    } catch (error) {
        handleHttp(res,"Error Delete blog")
    }
}
export {
    getblog,
    getblogs,
    postblog,
    putblog,
deleteblog}