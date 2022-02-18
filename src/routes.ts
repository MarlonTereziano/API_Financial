import { Router } from 'express';
import authMiddleware from './middlewares/ensureAuthenticated';

import { CreateUserController } from './controllers/CreateUserController';
import { DeleteUserController } from './controllers/DeleteUserController';
import { GetAllUsersController } from './controllers/GetAllUsersController';
import { UpdateUserController } from './controllers/UpdateUserController';

import { CreateTransactionController } from './controllers/CreateTransactionController';
import { DeleteTransactionController } from './controllers/DeleteTransactionController';
import { GetAllTransactionsController } from './controllers/GetAllTransactionsController';
import { UpdateTransactionController } from './controllers/UpdateTransactionController';

import{ CreateContactController } from './controllers/CreateContactController';
import{ DeleteContactController } from './controllers/DeleteContactController';
import{ UpdateContactController } from './controllers/UpdateContactController';
import{ GetAllContactsController } from './controllers/GetAllContactsController';

import { SessionsController } from './controllers/SessionsController';

const routes = Router();


routes.post('/sessions', new SessionsController().handle);

// routes.use(authMiddleware);
routes.post('/user', new CreateUserController().handle);
routes.get('/user', new GetAllUsersController().handle);
routes.delete('/user/:id', new DeleteUserController().handle);
routes.put('/user/:id', new UpdateUserController().handle);

routes.post('/transaction', new CreateTransactionController().handle);
routes.get('/transaction', new GetAllTransactionsController().handle);
routes.delete('/transaction/:id', new DeleteTransactionController().handle);
routes.put('/transaction/:id', new UpdateTransactionController().handle);

routes.post('/contact', new CreateContactController().handle);
routes.get('/contact', new GetAllContactsController().handle);
routes.delete('/contact/:id', new DeleteContactController().handle);
routes.put('/contact/:id', new UpdateContactController().handle);


export { routes };




