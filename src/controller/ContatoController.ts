import { getManager } from "typeorm";
import { Contato } from "../entity/Contato";

export class ContatoController {

    async salvar(contato: Contato) {
        const contatoSalvo = await getManager().save(contato);
        return contatoSalvo;
    }

    async deletar(id: number) {
        const contato = await getManager().findOne(Contato, id);
        const contatoDeletado = await getManager().remove(contato);
        return contatoDeletado;
    }

    async atualizar(id: number, contato: Contato) {
        const contatoAtualizado = await getManager().update(Contato, id, contato);
        return contatoAtualizado;
    }

    async recuperarTodos() {
        const contatos = await getManager().find(Contato);
        return contatos;
    }

    async recuperarPorId(id: number) {
        const contato = await getManager().findOne(Contato, id);
        return contato;
    }



}