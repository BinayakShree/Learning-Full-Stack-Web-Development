/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/
//First Way
// const largestNumber= numbers.reduce((accumulator,currentValue)=>{
//     if(currentValue>accumulator){
//         return currentValue
//     } 
//     else{
//         return accumulator
//     }
//    },numbers[0])
//    return largestNumber
function findLargestElement(numbers) {
    //Second Way
    let largestNumber=numbers[0];
    numbers.forEach(number => {
        if(number>largestNumber){
            largestNumber=number
        }
    });
    return largestNumber
}

module.exports = findLargestElement;