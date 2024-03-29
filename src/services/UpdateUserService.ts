import { getRepository } from "typeorm";
import { User } from "../entities/User";
import { hash } from 'bcryptjs';

type UserUpdateRequest = {
    name: string;
    lastName: string;
    email: string;
    password: string;
    id: string;
}

export class UpdateUserService {
    async execute({ id, name, lastName, email,password  }: UserUpdateRequest): Promise<User | Error> {
        const userRepository = getRepository(User);

        const user = await userRepository.findOne(id);

        if (!user) {
            return new Error("User not found");
        }
        const hashedPassword = await hash(password, 8);

        user.name = name ? name : user.name;
        user.password = password ? hashedPassword : user.password;
        user.lastName = lastName ? lastName : user.lastName;
        user.email = email ? email : user.email;

        await userRepository.save(user);

        return user;
    }
}