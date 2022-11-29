//create the sub module
import * as express from "express";


let transaction:any =express.Router();
transaction.get('/',(req:any,res:any) => {
    res.status(200).json({'message':'transaction soon.....'});
})
transaction.get('/perry',(req:any,res:any) => {
    res.status(200).json({'message':'welcome to my world'})
});
export default transaction;