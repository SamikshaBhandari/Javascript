//WAP to find the number is palindrome or not .
let num=125;
let original=num;
let reversed=0;
while(num>0){
    reversed=reversed*10+(num%10);
    num=Math.floor(num/10);
}
let result=(original===reversed)?"palindrome":"not a palindrome";
console.log(original + "is:" +result);