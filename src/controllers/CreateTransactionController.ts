import {Request, Response} from 'express';
import { CreateTransactionService } from '../services/CreateTransactionService';

export class CreateTransactionController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { owner, title, category, value, type} = request.body;

        const service = new CreateTransactionService();
        const result = await service.execute({
            owner, title, category, value, type
        });

        if(result instanceof Error){
            return response.status(400).json({
                message: result.message
            });
        }

        return response.json(result);
    }
}