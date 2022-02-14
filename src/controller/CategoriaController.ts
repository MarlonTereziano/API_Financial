import { getManager } from "typeorm";
import { Categoria } from "../entity/Categoria";

export class CategoriaController {

    async salvar(categoria: Categoria) {
        const categoriaSalvo = await getManager().save(categoria);
        return categoriaSalvo;
    }

    async deletar(id: number) {
        const categoria = await getManager().findOne(Categoria, id);
        const categoriaDeletado = await getManager().remove(categoria);
        return categoriaDeletado;
    }

    async atualizar(id: number, categoria: Categoria) {
        const categoriaAtualizado = await getManager().update(Categoria, id, categoria);
        return categoriaAtualizado;
    }

    async recuperarTodos() {
        const categorias = await getManager().find(Categoria);
        return categorias;
    }

    async recuperarPorId(id: number) {
        const categoria = await getManager().findOne(Categoria, id);
        return categoria;
    }



}