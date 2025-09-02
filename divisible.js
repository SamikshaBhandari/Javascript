//WAP to check if a number is divisible by both 3 and 5 but not by both.
let num=15;
if((num%3==0||num%5==0)&&!(num%3==0&&num%5==0)){
    console.log("Divisible by either 3 or 5, but not both:", num);
}else{
    console.log("Either divisible by both:", num);
}