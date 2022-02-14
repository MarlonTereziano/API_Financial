import { app } from './app';

const PORTA = 3000;

/* Servidor Express*/

const server = app.listen(3000, () => console.log(`App ouvindo na porta ${PORTA}`));
process.on('SIGINT', () => {
    server.close();
    console.log('App finalizado');
});
