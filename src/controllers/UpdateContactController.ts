import { Request, Response } from 'express';

import { UpdateContactService } from "../services/UpdateContactService";

export class UpdateContactController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const {name, email, mensagem} = request.body;

        const updateContactService = new UpdateContactService();

        const result = await updateContactService.execute({
            name, email, mensagem, id
        });
        
        if(result instanceof Error){
            return response.status(400).json({
                message: result.message
            });
        }

        return response.json(result);
    }
}