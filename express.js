let express=require('express');
//create the rest object with
let app = express();
//get request
app.get("/",(req,res)=>{
    res.status(200).json({"message":"default get request....!"});
});


app.get("/demo",(req,res)=>{
    res.status(200).json({"message":"data from mongo db data.....!"});
})
// #post request

app.post("/",(req,res)=>{
    res.status(200).json({"message":"default post request....!"});
});

app.post("/demo",(req,res)=>{
    res.status(200).json({"message":"data from  cassandradb database soon....!"});
});

app.listen(8080,() => {
    console.log('server star.....!')
});