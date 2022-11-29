import * as express from "express";
let account = express.Router();
account.get('/',(req:any, res:any) => {
    res.status(200).json({"message":"welcome to my world"});
});

account.post('/acc',(req:any, res:any) => {
    res.status(200).json({"message":"welcome to my state"});
});
export default account;