//Write a javascript program to create an array of objects representing people ,where 
// each object has a name and age property.Use push()to add a new person to the array
//  and use pop()to remove the last person from the array.


let people=[{
    name:"Samiksha",
    age:20
},{
    name:"nirjala",
    age:21
}
]
people.push({name:"sophia",age:21});
console.log(people);
people.pop();
console.log(people);