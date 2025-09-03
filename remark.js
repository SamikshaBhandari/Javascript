//WAP to implement a simple grading system with remarks(eg."Excellent",
// "very good","good","Average","fail") based on percentage.
let percantage=80;
if(percantage>=90&&percantage<=100){
    console.log("Excellent");
}
else if(percantage>=75&&percantage<=90){
    console.log("very good");  
}else if(percantage>=65&&percantage<=72){
    console.log("Good");
}else if(percantage>=50&&percantage<=60){
    console.log("Average");
}
else if(percantage>=40&&percantage<=60){
    console.log("Fail");
}
else{
    console.log("Invalid input");
}