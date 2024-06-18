/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/
let loopFunction=(n)=>{
    let i=0;
    let sum=0;
    while(i<=n){
      sum+=i
     i++
    }
    return sum
  }
  function calculateTime(n) {
    let beforeTime=new Date().getTime();
    console.log(beforeTime)
    loopFunction(n);
    let afterTime=new Date().getTime();
    console.log(afterTime)
    let requiredTime=(afterTime-beforeTime)/1000;
    return requiredTime;
  }
  
  console.log(calculateTime(10000000000));