import { getRepository } from "typeorm";
import { Contact } from "../entities/Contact";

export class DeleteContactService {
    async execute(id: string): Promise<Contact | Error> {
        const contactRepository = getRepository(Contact);
        if (!(await contactRepository.findOne(id))) {
            return new Error("Contact not found");
        }
        await contactRepository.delete(id);
    }
}