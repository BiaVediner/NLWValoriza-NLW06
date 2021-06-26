import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

class FindUserService {
    async execute() {
        const usersRepositories = getCustomRepository(UsersRepositories)

        const users = await usersRepositories.find()

        return users
    }
    
}

export { FindUserService }