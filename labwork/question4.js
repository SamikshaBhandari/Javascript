//4.WAP that takes a number as an argument and return its factorial 
// .test the function with different 

function fact(n){
    if(n==0||n==1){
        return n;
    }
else{
    return fact(n)*fact(n-1);
}
}
console.log("Factorial:",fact(15));
