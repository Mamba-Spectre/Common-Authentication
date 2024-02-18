import { createUser, getUserByEmail } from '../db/users';
import express from 'express'
import { random, authentication } from '../helpers';

export const register = async(req:express.Request, res:express.Response) => {
    try{

        
        const {email,password, username} = req.body;
        console.log(req.body);
        

        if(!email || !password || !username){
            return res.sendStatus(400);
        }
        const existingUser = await getUserByEmail(email);
        if(existingUser){
            console.log("here");
            return res.sendStatus(400);
        }

        const salt = random();
        const user = await createUser({
            email,username,authentication:{
                salt,
                password: authentication(salt,password),
            },
        })
        console.log(res.status(200).json(user).end());
        

        return res.status(200).json(user).end();
    }
    catch(error){
        console.log(error);
        return res.sendStatus(400);
        
    }
}