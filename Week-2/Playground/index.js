const express=require('express');
const app=express();
const PORT=3000;
app.get('/',(req,res)=>{
    console.log("Hitted")
    res.send("Hello World")
})
app.post('/test',(req,res)=>{
    console.log(req.headers['authorization'])

    res.send("Recived Auth")
})
app.listen(PORT,(err)=>{
    console.log(`Successfully Hosted on port ${PORT}`)
    if(err){
        console.log(err)
    }
   
})
