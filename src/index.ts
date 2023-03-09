import express,{Express} from 'express';
import {router} from "./router";



const app: Express = express();

app.listen(3031,()=>{
    console.log("express ap is listening in port 3031");
});

app.use(express.json());

app.use(router);
