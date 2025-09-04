//4.WAP that takes a number as an argument and return its factorial 
// .test the function with different 

function factorial(n){
    if(n<0)
        return`factorial of ${n} doesn't exist`;
    else if(n===0)
        return 1;
    else{
        let fact=1;
        for(let i=n;i>=1;i--){
            fact=fact*i;
        }
        return fact;
    }
    
}
console.log(factorial(7));
console.log(factorial(3));
