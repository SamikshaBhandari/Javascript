//WAP to check if a character is an alphabet, digit or special symbol.
let ch='#';
if((ch>='A'&&ch<='Z')||(ch>='a'&&ch<='z')){
    console.log("Alphabet");
} else if(ch>='0'&&ch<='9'){
    console.log("Digit");
}else{
    console.log("Special Symbol");
}