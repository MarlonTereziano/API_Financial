import { Transacao } from '../entity/Transacao';
import { Router } from 'express';
import { TransacaoController } from '../controller/TransacaoController';
import * as moment from 'moment';

export const routertransacao = Router();
const transacaoCtrl = new TransacaoController();

/**
 * Serviço pra salvar uma nova transacao
 */
routertransacao.post('/', async (req, res) => {
    const date = moment().format('DD-MM-YYYY HH:mm:ss');
    const { titulo, valor, tipo, categoria } = req.body;
    const transacao = new Transacao(titulo, valor, tipo, categoria, date);
    const transacaoSalvo = await transacaoCtrl.salvar(transacao);
    res.json(transacaoSalvo);
});

/* Deletar uma transacao */
routertransacao.delete('/:id', async (req, res) => {
    const { id } = req.body;
    const transacao = await transacaoCtrl.deletar(id);
    res.json(transacao);
});

/**
 * Serviço para recuperar todas as transações
 */
routertransacao.get('/', async (req, res) => {
    const transacoes = await transacaoCtrl.recuperarTodos();
    res.json(transacoes);
});

/**
 * Serviço para atualizar uma transacao
 */
routertransacao.put('/', async (req, res) => {
    const date = moment().format('DD-MM-YYYY HH:mm:ss');
    const { id,titulo, valor, tipo, categoria } = req.body;
    const transacao = new Transacao(titulo, valor, tipo, categoria, date);
    const transacaoAtualizado = await transacaoCtrl.atualizar(id, transacao);
    res.json(transacaoAtualizado);
});

