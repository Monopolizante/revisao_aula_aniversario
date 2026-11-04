import { knex } from "../connection/knex.js";
import {CreateJogo, Jogo}from "../types/jogos.interface.js"
class JogosRepository{
    async getAllJogos(): Promise<Jogo[]>{
        const data = await knex('jogos').select('*').from('jogos')
        return data      
    }
    async createJogo(): Promise<Jogo>{
        const data = await knex<CreateJogo>('jogos').insert()
    }
}

export const jogosRepository = new JogosRepository()