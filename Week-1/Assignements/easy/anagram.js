/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/
//Basic Plan to Solve Anagram
//First check if the number of the letters of string supplied is equal or not. If its equal go to further steps else return False
//Make the both string uppercase/lowercase. Convert it to array and sort in asscending order using split and sort property respectively.
//Check if the elements in array are equal 
//If the number of element equal in both array=length on inital string then return true
function isAnagram(str1, str2) {
  let c=0
  if(str1.length!==str2.length){
    return false
  }
  str1Upper=str1.toUpperCase()
  str2Upper=str2.toUpperCase()
  str1arr=str1Upper.split("").sort()
  str2arr=str2Upper.split("").sort()
  for(let i=1;i<=str1.length;i++){
    if(str1arr[i]===str2arr[i]){
      c++
    }
    else{
      return false
    }
  }
  if (c===str1Upper.length){
    return true
  }
}

module.exports = isAnagram;
