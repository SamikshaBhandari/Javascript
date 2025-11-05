//Write a javascript program to create an array of string and remove the first element from the 
// array. Then add a new string to the beginning of the array. using shift()and Unshift.

let arr=["apple","Grapes","Mango","orange","banana"];
console.log(arr.toString());
let shiftelement=arr.shift();
console.log(arr);
let unshiftelement=arr.unshift("Kiwi");
console.log(arr);