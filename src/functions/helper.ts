import { User } from "../entity/User";
import {createConnection} from 'typeorm';
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