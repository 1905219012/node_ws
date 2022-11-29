//merge two module account & transaction
import * as express from "express";
import transaction from "./transaction";
import accounts from "./accounts";
let app:any = express();
app.use("/module1",transaction);
app.use("/module2",accounts);
app.listen(8080,()=>{
    console.log("server started");
});



//http://localhost:8080/module1 for transaction
//http://localhost:8080/module1/perryfor /transaction get 
//http://localhost:8080/module2/  for getreuest account
//http://localhost:8080/module2/   get request  account
