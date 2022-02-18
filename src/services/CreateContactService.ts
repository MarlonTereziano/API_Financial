import { getRepository } from "typeorm";
import { Contact } from "../entities/Contact";

type ContactRequest = {
    name: string;  
    email: string;
    mensagem: string;
}

export class CreateContactService {
     async execute({name, email, mensagem}: ContactRequest): Promise<Contact | Error> {
        const categoryRepository = getRepository(Contact);

        const result = categoryRepository.create({
            name,
            email, 
            mensagem,
        });
        
        await categoryRepository.save(result);
        return result;

    }
}


