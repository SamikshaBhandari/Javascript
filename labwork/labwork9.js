//Write a javascript program to create an array strings and use map()
//  to create a new array where each string is capitalized .Print the new array

let strarray=["samiksha","Nirjala","ruksan"];
let map=strarray.map((value)=>{
    return(value.toLocaleUpperCase())
})
console.log(map);