//write a function name calculate BIM that takes a person's weight in kg and height in meters
//as arguments and returns the BMI ,test the function with different weights 
// and heights and log the return value to the console

function calculateBMI(weight, height) {
    let bmi = weight / (height * height);
    return bmi;
}
console.log(calculateBMI(50, 1.50));
console.log(calculateBMI(78, 2.3));