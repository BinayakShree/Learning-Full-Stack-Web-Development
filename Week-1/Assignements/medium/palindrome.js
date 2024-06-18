/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let strUpperCase=str.toUpperCase();
  strUpperCase=strUpperCase.replace(/[^A-Z0-9]/g, '')
  let strArray=strUpperCase.split("");
  let reverseStrArray=strArray.slice().reverse()
  let c=0
  for(let i=1;i<=strArray.length;i++){
    if(strArray[i]===reverseStrArray[i]){
      c++;
    }
  }
  if(c===strArray.length){
    return true
  }
  else{
    return false
  }
}

module.exports = isPalindrome;
