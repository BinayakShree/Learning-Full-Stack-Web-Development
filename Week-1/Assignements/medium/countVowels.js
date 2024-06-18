/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  strUpperCase=str.toUpperCase();
  let strArray=strUpperCase.split("")
  let c=0;
  let vowels=["A","E","I","O","U"]
  strArray.forEach(alphabet => {
  if(vowels.includes(alphabet)){
    c++;
  }
  });
  return c;
}

module.exports = countVowels;