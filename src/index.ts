import express,{Express} from 'express';
import DbConnection from './Database/DbConnection';
import ErrorHandlingMiddleware from './Middlewares/ErrorHandlingMiddleware';
import HeaderMiddleware from './Middlewares/HeaderMiddleware';
import {router} from "./router";

DbConnection.sync({alter:true});

const app: Express = express();

app.listen(3031,()=>{
    console.log("express ap is listening in port 3031");
});

app.use(express.json());

app.use(HeaderMiddleware);
app.use(router);
app.use(ErrorHandlingMiddleware);