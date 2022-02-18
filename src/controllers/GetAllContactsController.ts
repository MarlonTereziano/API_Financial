import { Request, Response } from 'express';
import { GetAllContactsService } from '../services/GetAllContacts';

export class GetAllContactsController {
    async handle(request: Request, response: Response): Promise<Response> {
        const service = new GetAllContactsService();

        const categories = await service.execute();

        return response.json(categories);
    }
}
