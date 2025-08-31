//WAP whether a number is armstrong .
let number=153;
let sum=0;
let temp=number;
let digits=number.toString().length;
while(temp>0) {
    let d=temp%10;
    sum+=d **digits;
    temp=Math.floor(temp/10);
}
console.log(number+ " is "+(sum===number?"Armstrong":"Not Armstrong"));