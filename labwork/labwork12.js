//write a javascript program to create an array of strings and use the filter() 
// method to filter out strings that start either the letter 'A' .Print the filter array.

let strArr = ["Apple", "Banana", "Avocado", "Mango","Grapes"];
let Fruit = strArr.filter(fruit => !fruit.startsWith("A"));
console.log("Filtered array:",Fruit);