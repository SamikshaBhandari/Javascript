console.log("This is javascript");
//using var as global variable
var x=10;{
   var x=20; 
}
console.log("Using var:",x);
//using let as block scope variable
let y=20;{
    let y=30;
}
console.log("Using let:",y);

//using const as block scope variable
const z=40;{
    const z=50;
}
console.log("Using const:",z);