import { Request, Response } from "express";
import { FindUserService } from "../services/FindUserService";

class FindUserController {
    async handle(request: Request, response: Response) {
        const findUserService = new FindUserService();

        const users = await findUserService.execute()    

        return response.json(users)
    }
}

export { FindUserController }