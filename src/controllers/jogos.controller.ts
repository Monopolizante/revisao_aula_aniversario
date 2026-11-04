import { type Request, type Response } from "express";
import { jogosService } from "../services/jogos.service.js";
class JogosController{
    async getAllJogos(_req: Request, res: Response){
        try {
            const data = await jogosService.getAllJogos()
            return res.json(data).status(200)
        } catch (error) {
            console.error(error)
        }
    }
}

export const jogosController = new JogosController()