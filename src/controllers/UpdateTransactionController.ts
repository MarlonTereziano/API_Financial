import { Request, Response } from 'express';

import { UpdateTransactionService } from "../services/UpdateTransactionService";

export class UpdateTransactionController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const {owner, title, category, value, type} = request.body;
        const updateTransactionService = new UpdateTransactionService();

        const result = await updateTransactionService.execute({
            owner, title, category, value, type, id
        });
        
        if(result instanceof Error){
            return response.status(400).json({
                message: result.message
            });
        }

        return response.json(result);
    }
}