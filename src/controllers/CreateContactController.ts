import {Request, Response} from 'express';
import { CreateContactService } from '../services/CreateContactService';

export class CreateContactController {
    async handle(request: Request, response: Response): Promise<Response> {
        const {name, email, mensagem} = request.body;

        const service = new CreateContactService();
        const result = await service.execute({
            name, email, mensagem
        });

        if(result instanceof Error){
            return response.status(400).json({
                message: result.message
            });
        }

        return response.json(result);
    }
}