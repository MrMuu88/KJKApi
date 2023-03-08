const express = require("express");

//define the express app
const app = express();

//add an array as a datastore (temp solution)
const users= [
    {id:1, firstName:"Tamás", LastName:"Simon"},
    {id:2, firstName:"Anett", lastName:"Simonné Bíró"},
    {id:3, firstName:"Laura", lastName:"Simon"},
    {id:4, firstName:"Kornél", lastName:"Simon"}
];

//configure express for json body
app.use(express.json());

//define a get endpoint to return all users
app.get('/users/list',(req,res) => {
    res.send(users);
});

//using url parameter to get by id
app.get('/users/:userId',(req,res)=>{
    let user = users.filter(u => u.id == req.params.userId)
    res.send(user);
});

//consuming a body object
app.put('/users/:userId',(req,res)=>{
    var user = users.find(u => u.id == req.params.userId);
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    res.send(user);
});

app.post('/users',(req,res) => {
    if(req.body.firstName === undefined || req.body.lastName === undefined){
        return res.sendStatus(400).end();
    }

    var user = {id:users.length+1, firstName:req.body.firstName, lastName:req.body.lastName};
    users.push(user);
    res.send(user);
});




//starting the server

app.listen(3001, ()=> {
    console.log("server is listening on port 3001");
});
