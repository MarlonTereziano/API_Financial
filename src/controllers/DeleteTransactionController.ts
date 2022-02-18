import { Request, Response } from 'express';
import { DeleteTransactionService } from '../services/DeleteTransactionService';

export class DeleteTransactionController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const service = new DeleteTransactionService();

        const result = await service.execute(id);

        if(result instanceof Error) {
            return response.status(400).json({
                error: result.message
            });
        }

        return response.status(204).send();
    }
}