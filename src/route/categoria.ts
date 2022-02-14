import { Categoria } from '../entity/Categoria';
import { Router } from 'express';
import { CategoriaController } from '../controller/CategoriaController';

export const routercategoria = Router();
const categoriaCtrl = new CategoriaController();

/**
 * Serviço pra salvar uma nova categoria
 */
routercategoria.post('/', async (req, res) => {
    const { tipo_categoria } = req.body;
    const categoria = new Categoria(tipo_categoria);
    const categoriaSalvo = await categoriaCtrl.salvar(categoria);
    res.json(categoriaSalvo);
});

/* Deletar uma categoria */
routercategoria.delete('/:id', async (req, res) => {
    const { id } = req.body;
    const categoria = await categoriaCtrl.deletar(id);
    res.json(categoria);
});

/**
 * Serviço para recuperar todas as categorias
 */
routercategoria.get('/', async (req, res) => {
    const categorias = await categoriaCtrl.recuperarTodos();
    res.json(categorias);
});

/**
 * Serviço para atualizar um categoria
 */

routercategoria.put('/', async (req, res) => {
    const {id,tipo_categoria} = req.body;
    const categoria = new Categoria(tipo_categoria);
    const categoriaAtualizado = await categoriaCtrl.atualizar(id, categoria);
    res.json(categoriaAtualizado);
});

