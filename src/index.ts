import express,{Express, Request, Response} from 'express';

import { User } from './Models/user';

const app: Express = express();

app.listen(3031,()=>{
    console.log("express ap is listening in port 3031");
});

app.use(express.json());

app.get("/api/users/list",(req:Request,res:Response) => {
    res.setHeader('Content-Type','application/json');
    res.status(200).send(users);
});

const users : User[] = [
    {id:1,firstName:"Tamás",lastName:"Simon"},
    {id:2,firstName:"Anett",lastName:"Simonné Bíró"},
    {id:3,firstName:"Laura",lastName:"Simon"},
    {id:4,firstName:"Kornél",lastName:"Simon"}
]
