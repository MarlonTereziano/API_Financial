import { getRepository } from "typeorm";
import { Transaction } from "../entities/Transaction";

interface listTransaction extends Transaction {
    dateConverted: string;
}

export class GetAllTransactionsService {
    async execute(): Promise<listTransaction[] | Error> {
        const transactionRepository = getRepository(Transaction);
        const transactions = await transactionRepository.find({
            relations: ["owner"]
        });
        let resultTransactions= transactions as listTransaction[];
        for (let i = 0; i < resultTransactions.length; i++) {
            resultTransactions[i].owner.password = undefined;
            //converte date para dd/mm/yyyy hh:mm
            resultTransactions[i] ={...resultTransactions[i]}
        }
        

        if (!transactions) {
            return new Error("Transactions not found");
        }
        return resultTransactions;
    }
}

