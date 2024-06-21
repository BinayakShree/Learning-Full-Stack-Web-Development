const fs=require('fs')
fs.readFile('Week-2/Async JS Assignement/medium/1.txt','utf-8',(err,data)=>{
    if(err){
        console.log(err)
    }
    else{
        let dataArr=data.split(' ')
        let result=dataArr.filter(letter => letter!==" ").join(' ')
        fs.writeFile('Week-2/Async JS Assignement/medium/1.txt',result,(err)=>{
            if(err){
                console.log(err)
            }
            console.log("Completed")
        })
    }

})
