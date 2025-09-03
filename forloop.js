let i,sum=0,n=10;
for(i=0;i<n;i++){
    sum+=i+1;
}
console.log("Sum of first:",n,"natural number is:",sum);

//for in loop 
let employee={
    name:'Samiksha',
    age:20,
    address:'Itahari'
};
for(let key in employee){
    console.log(key,":",employee[key])
}

//for of loop
let str="Samiksha";
for(let value of str){
    console.log(value);
}
sum=0;
const num=[2,5,7];
for(let value of num){
    sum+=value;
}
console.log("sum of value is:",sum);
