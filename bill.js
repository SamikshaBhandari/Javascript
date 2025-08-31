//calculating electricity bill condition first 50 units 5 
// per units ,next 100 units 7 per units ,above 150 units 10 per unit .
let units=200;
let bill=0;
if(units<=50){
    bill=units*5;
    console.log("Your electricity bill is "+bill);
}
else if (units>50&&units<=150){
    bill=50*5+(units-50)*7;
    console.log("your electricity bill is "+bill);
}
else{
    bill=50*5+100*7+(units-150)*10;
    console.log("your electricity bill is "+bill);
}