import { getRepository } from "typeorm";
import {v4 as uuid} from "uuid";
import { Transaction } from "../entities/Transaction";
import { User } from "../entities/User";
import AppError from "../errors/AppError";

type TransactionRequest = {
    owner: string;
    title: string;
    category: string;
    value: number;
    type: string;
}

export class CreateTransactionService {
     async execute({owner, title, category, value, type }: TransactionRequest): Promise<Transaction | Error> {
        const transactionRepository = getRepository(Transaction);
        const userRepository = getRepository(User);

        if(!(await userRepository.findOne({id: owner}))) {
            throw new AppError("Onwer id not found", 400);
        }        
        console.log("aqui4");

        
        //check if already exists
        // const transaction = await transactionRepository.findOne({
        //     where: {
        //         owner_id: owner,
        //     }
        // });
        // console.log("transaction", transaction);
        // if(transaction) {
        //     throw new AppError("Transaction already exists", 400);
        // }

        const result = transactionRepository.create({
            owner_id: owner,
            title,
            category,
            value,
            type
        });
        
        await transactionRepository.save(result);
        return result;

    }
}