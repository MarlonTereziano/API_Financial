import { getRepository } from "typeorm";
import { Contact } from "../entities/Contact";
import { hash } from 'bcryptjs';

type ContactUpdateRequest = {
    name: string;
    email: string;
    id: string;
    mensagem: string;
}

export class UpdateContactService {
    async execute({ id, name, email, mensagem}: ContactUpdateRequest): Promise<Contact | Error> {
        const contactRepository = getRepository(Contact);

        const contact = await contactRepository.findOne(id);

        if (!contact) {
            return new Error("Contact not found");
        }

        contact.name = name ? name : contact.name;
        contact.email = email ? email : contact.email;
        contact.mensagem = mensagem ? mensagem : contact.mensagem;

        await contactRepository.save(contact);

        return contact;
    }
}