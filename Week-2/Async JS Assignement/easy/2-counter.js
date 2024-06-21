let c=0;
const timer=()=>{
    console.log(c)
    c+=1
    setTimeout(timer,1000)
}
setTimeout(timer,1000)