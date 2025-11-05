//Write a javascript program to create an array of object representing books,
// where each object has title and author property.Use slice ()to 
// remove the second book from the array .Print Modified array

let books=[{
    title:"Operating System",
    author:"Ashish shrestha"
},{
title:"Scripting Language",
author:"Saroj ojha"
}
,{
    title:"DBMS",
    author:"Chandra Acharya"
}
]
let splices=books.splice(1,1);
console.log(books)