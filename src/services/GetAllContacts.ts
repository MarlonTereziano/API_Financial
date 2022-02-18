import { getRepository } from "typeorm";
import { Contact } from "../entities/Contact";

type ContactList = {
    name: string;
    email: string;
    mensagem: string;
}

export class GetAllContactsService {
    async execute(): Promise<ContactList[] | Error> {
        const contactRepository = getRepository(Contact);

        const contacts = await contactRepository.find();

        if (!contacts) {
            return new Error("Categories not found");
        }

        const result = contacts.map(category => {
            const {...rest } = category;
            return rest;
        });

        return result;
    }
}

