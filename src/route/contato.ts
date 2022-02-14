import { Contato } from '../entity/Contato';
import { Router } from 'express';
import { ContatoController } from '../controller/ContatoController';

export const routercontato = Router();
const contatoCtrl = new ContatoController();

/**
 * Serviço pra salvar um novo contato
 */
routercontato.post('/', async (req, res) => {
    const { nome, email, mensagem } = req.body;
    const contato = new Contato(nome, email, mensagem);
    const contatoSalvo = await contatoCtrl.salvar(contato);
    res.json(contatoSalvo);
});

/* Deletar um contato */
routercontato.delete('/:id', async (req, res) => {
    const { id } = req.body;
    const contato = await contatoCtrl.deletar(id);
    res.json(contato);
});

/**
 * Serviço para recuperar todos os contatos
 */
routercontato.get('/', async (req, res) => {
    const contatos = await contatoCtrl.recuperarTodos();
    res.json(contatos);
});

/**
 * Serviço para atualizar um contato
 */

routercontato.put('/', async (req, res) => {
    const { id, nome, email, mensagem } = req.body;
    const contato = new Contato(nome, email, mensagem);
    const contatoAtualizado = await contatoCtrl.atualizar(id, contato);
    res.json(contatoAtualizado);
});

