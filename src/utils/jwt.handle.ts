import {sign, verify} from "jsonwebtoken"
const JWT_SECRET = process.env.JWT_SECRET || "token.01010101"
const generateToken = async (id: string) => {
    //enviaremos el id
    const jwt = sign({id}, JWT_SECRET, {
        expiresIn: "2h"
    })
    return jwt
}

const verifyToken = async (jwt: string) => {
    //EN ISOK ESTA RETORNANDO EL USUARIO, EL PAYLOAD
    const isOk = verify(jwt, JWT_SECRET);
    console.log(isOk)
    return isOk
}

export {generateToken, verifyToken}