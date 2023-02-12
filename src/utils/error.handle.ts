import { Request, Response } from "express"

const handleHttp = (res: Response, error: String, errorRaw?:any)=> {
    console.log(errorRaw)
    res.status(500)
    res.send("ERROR_GET_ITEM")
}

export {handleHttp}