import { Router } from "express";
import {readdirSync} from "fs";

const PATH_ROUTER = `${__dirname}`
const router = Router();

/**
 * CARGADOR DINAMICO DE RUTAS
 * index.ts item
 * @returns 
 */
//limpia el filename
const cleanFileName = (filename: string) => {
    const file = filename.split('.').shift();
    return file;
}
//lee cuantos y cuales archivos existen
readdirSync(PATH_ROUTER).filter((filename) => {
    const cleanName = cleanFileName(filename);
    if(cleanName !== "index"){
        import(`./${cleanName}`).then((moduleRouter) => {
            console.log(`Se está cargando la ruta... ${cleanName}`)
            router.use(`/${cleanName}`, moduleRouter.router)
        })
    }
})

export {router}