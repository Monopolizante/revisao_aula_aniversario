import express from "express";
import { jogosRouter } from "./routes/jogos.routes.js";
const app = express()
const port = 3000

app.use(express.json())

app.use("/", jogosRouter)

app.listen(port, () => {
    console.log("Servidor ligado na porta https://localhost:"+ port)
})