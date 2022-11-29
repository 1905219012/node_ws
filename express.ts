//import expree module
import * as express from "express";

let app:any= express();
//app object used to devloped the  rest services
//ex.get,post,put,delete................................................................

//get request
app.get("/",(req:any,res:any):any=>{
    res.status(200).json({"message":"welcome to type script node js"})
});
//asign the port no
app.listen(8080,()=>{
    console.log("server started sucess fully!!1");
});
