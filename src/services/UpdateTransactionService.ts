import { getRepository } from "typeorm";
import { Transaction } from "../entities/Transaction";
import { User } from "../entities/User";


type TransactionRequest = {
    owner: string;
    title: string;
    category: string;
    value: number;
    type: string;
    id: string;
}

export class UpdateTransactionService {
    async execute({ owner, title, category, value, type, id}: TransactionRequest): Promise<Transaction | Error> {
        const transactionRepository = getRepository(Transaction);
        const transaction = await transactionRepository.findOne(id);
        const userRepository = getRepository(User);


        if (!transaction) {
            return new Error("Transaction not found");
        }

        // if(!(await userRepository.findOne({id:owner}))) {
        //     return new Error("Onwer id not found");
        // }
        console.log("Transação", transaction);
        //convert this 2022-04-07 21:38 to this 2022-02-17T03:57:47.000Z


        transaction.title = title ? title : transaction.title;
        transaction.category = category ? category : transaction.category;
        transaction.value = value ? value : transaction.value;
        transaction.type = type ? type : transaction.type;
        
        await transactionRepository.save(transaction);
        return transaction;
    }
}


