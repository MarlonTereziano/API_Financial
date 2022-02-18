import { getRepository } from "typeorm";
import { Transaction } from "../entities/Transaction";

export class DeleteTransactionService {
    async execute(id: string): Promise<Transaction | Error> {
        const transactionRepository = getRepository(Transaction);
        if (!(await transactionRepository.findOne(id))) {
            return new Error("Transaction not found");
        }
        await transactionRepository.delete(id);
    }
}