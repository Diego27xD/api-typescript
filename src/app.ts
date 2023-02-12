import express from "express"
import cors from "cors"
import { router } from "./routes"
import dbConnect from "./config/mongo"
import "dotenv/config"
const PORT = process.env.PORT || 5000
const app = express()
app.use(cors())
app.use(express.json())
app.use(router)
dbConnect().then(()=> console.log("Conection really"))
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
