const express = require("express");
const app = express();
const mongoose = require("mongoose");

main()
.then(()=>{
    console.log("connected to db");
})
.catch((err)=>{
    console.log(err);
});

async function main(){
    await mongoose.connect('mongodb://127.0.0.1/safarstay');
}

app.get("/", (req, res)=>{
    res.send("hiii, i'm root");
});

app.listen(8080, ()=>{
    console.log("server is listening");
});