//Write a javascript program to create an array of
//  numbers and use forEach()to print all the evennumbers in the array.

let arr=[1,2,3,4,5];
arr.forEach(function(i){
    if(i%2==0){
        console.log(i)
    }
});