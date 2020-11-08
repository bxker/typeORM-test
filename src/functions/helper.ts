import { User } from "../entity/User";
import {createConnection, getRepository, getConnection} from 'typeorm';
import {Request, Response} from 'express';

export const createUser = async (req: Request, res: Response) => {
    const {firstName, lastName, age} = req.body;
    try{
        await createConnection();
        const user = new User();
        user.firstName = firstName;
        user.lastName = lastName;
        user.age = age;

        const newUser = await user.save();
    
        if(newUser) {
            console.log(newUser)
            res.status(200).json(newUser)
        }
    }catch(e){
        console.error(e.message)
    }
}

export const findUser = async (req: Request, res: Response) => {
    const {id} = req.params;
    try{
        const userRepository = await getConnection().getRepository(User);
        const foundUser = await userRepository.findOne(id);
        console.info(foundUser)
    }catch(e){
        console.error(e.message)
    }
}