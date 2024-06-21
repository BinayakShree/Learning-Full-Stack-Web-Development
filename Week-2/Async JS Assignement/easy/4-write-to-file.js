const fs=require('fs');
fs.writeFile('Week-2/Async JS Assignement/easy/example.txt','Noothign Much','utf-8',(err)=>{
    if(err){
        console.log(err)
        return
    }
    console.log("Successfully Written")
})