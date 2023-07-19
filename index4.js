import express from "express";
import path from "path";
import bodyparser from "body-parser";
const __dirname=path.resolve();
const app=express();
var bandname="";
app.use(bodyparser.urlencoded({extended:true}));

function band_name_generator(req,res,next){
  const street=req.body.street;
  const pet=req.body.pet;
  bandname=street+pet
  next();
}
app.use(band_name_generator);

app.get("/",(req,res)=>{
  res.sendFile(__dirname +"/public/index.html")
})
app.post("/submit",(req,res)=>{
 res.send(`<h1>Band Name</h1><h2> Band name is: ${bandname}</h2>`);
})

app.listen(3000,()=>{
  console.log("Server live at port 3000")
})
