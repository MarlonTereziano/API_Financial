import { getManager } from "typeorm";
import { Transacao } from "../entity/Transacao";

export class TransacaoController {

    async salvar(transacao: Transacao) {
        const transacaoSalva = await getManager().save(transacao);
        return transacaoSalva;
    }

    async deletar(id: number) {
        const transacao = await getManager().findOne(Transacao, id);
        const transacaoDeletado = await getManager().remove(transacao);
        return transacaoDeletado;
    }

    async atualizar(id: number, transacao: Transacao) {
        const transacaoAtualizado = await getManager().update(Transacao, id, transacao);
        return transacaoAtualizado;
    }

    async recuperarTodos() {
        const transacoes = await getManager().find(Transacao);
        return transacoes;
    }

    async recuperarPorId(id: number) {
        const transacao = await getManager().findOne(Transacao, id);
        return transacao;
    }


}