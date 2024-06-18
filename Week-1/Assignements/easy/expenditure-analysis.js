/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  //create an empty totals object
  const totals={}
  //loop over each transaction of transactions array
  transactions.forEach(transaction => {
    //Destructure category and price in transaction object
    const {category,price}=transaction;
    //Check if a category is repeated or not
    if(!totals[category]){
      totals[category]=price
    }
    else{
      totals[category]+=price
    }
  });
  //Converted into the required data form
  const result=[];
  Object.keys(totals).forEach((category)=>{
    result.push({
      "category": category,
      "totalSpent":totals[category]

    })
  })
  return result;
}

module.exports = calculateTotalSpentByCategory;
