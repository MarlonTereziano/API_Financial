import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as logger from 'morgan';

import { conectarServidorNoBD } from './config/db';
import { routercontato } from './route/contato';
import { routertransacao } from './route/transacao';

/**
 * Cria a aplicação
 */
export const app = express();

/**
 * Libera o acesso aos serviços
 */
//  const allowedOrigins = ['*'];
//  const corsOptions = {
//     origin: allowedOrigins,
//     method: 'GET,OPTIONS,HEAD,PUT,PATCH,POST,DELETE',
// }

 app.use(cors());

/**
 * Permite receber e enviar JSON
 */
app.use(express.json());

/**
 * Configura os logs
 */
app.use(logger('dev'));


/**
 * Conecta no BD
 */
conectarServidorNoBD();

/**
 * Configuração de rotas
 */


app.use('/contato', routercontato);
app.use('/transacao', routertransacao);
app.use('/', (req, res) => res.send('API socket'));

