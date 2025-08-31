//WAP to input  mark of 5 subject ,calculate the percentage and
//  determine the division (distriction,First ,second,third and fail)

let m1=80,m2=60,m3=50,m4=70,m5=75;
let total=m1+m2+m3+m4+m5;
let percantage=total/5;
let grade=(percantage>=80) ?'distriction':
(percantage>=60)?'first':
(percantage>=50)?'second':
(percantage>=35)?'third':
'fail';
switch(grade){
    case"Distriction":
    console.log("Division:Distriction");
    break;
    case"First":
    console.log("Division:First");
    break;
    case"Second":
    console.log("Division:Second");
    break;
    case"Third":
    console.log("Division:Third");
    break;
    default:
    console.log("Division:Fail");
}
console.log("percentage;",percantage.toFixed(2) + "%");
