import { Router } from "express";
import { jogosController } from "../controllers/jogos.controller.js";
export const jogosRouter = Router()

jogosRouter.get("/", jogosController.getAllJogos)