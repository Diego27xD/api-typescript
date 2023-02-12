import { NextFunction, Request, Response } from "express"
import { JwtPayload } from "jsonwebtoken";
import { verifyToken } from "../utils/jwt.handle";

interface RequestExt extends Request{
    user? : string | JwtPayload;
}
const checkJwt = async (req: RequestExt, res: Response, next: NextFunction) => {
    try {
        const jwtByUser = req.headers.authorization || '';
        const jwt = jwtByUser.split(' ').pop();
        const isUser = await verifyToken(`${jwt}`)
        if(!isUser) {
            res.status(401).send("No tienes un jwt valido");
        }else{
            console.log({jwtByUser})
            req.user = isUser
            next()
        }
        
    } catch (error) {
        res.status(500).send("Session no valid token")
    }
}
export {checkJwt}