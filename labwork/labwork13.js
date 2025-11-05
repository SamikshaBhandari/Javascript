// Write a JavaScript program to create an array of objects
//  representing students, where each object has a name and age property.
//  Use the map() method to create a new array containing only the ages
//  of the students. Print the new array.

let student=[{
    name:"Samiksha",
    age:20
},{
    name:"Nirjala",
    age:20
},
{
    name:"Susmita",
    age:21
},{
    name:"Sagar",
    age:13
}
]
let age=student.map(students=>students.age);
console.log("Age of student",age);