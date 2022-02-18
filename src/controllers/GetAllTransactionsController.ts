import { Request, Response } from 'express';
import { GetAllTransactionsService } from '../services/GetAllTransactions';

export class GetAllTransactionsController {
    async handle(request: Request, response: Response): Promise<Response> {
        const service = new GetAllTransactionsService();

        const categories = await service.execute();

        return response.json(categories);
    }
}
