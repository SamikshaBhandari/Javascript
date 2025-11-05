//Array for Each 

let array=[1,2,3,4,5];
array.forEach(num=>{
    console.log(num);
})

//map reduce and filter method in array 

let arr=[3,4,5,6,7,8];
let a=arr.map((value,index,a)=>{
    console.log(value,index,a);
    return value + index;
})
console.log(a);