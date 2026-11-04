import { jogosController } from "../controllers/jogos.controller.js";
import { jogosRepository } from "../repositories/jogos.repository.js";
class JogosService{
    async getAllJogos(){
        try {
            const jogos = await jogosRepository.getAllJogos()
            return jogos
        } catch (error) {
            console.error(error)
        }
    }
}

export const jogosService = new JogosService()