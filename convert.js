/**
 * JS Conversion Problem
 */

//12 inch = 1 feet;

function inchToFeet(inch) {
    const feet = inch / 12;
    return feet;
}

function inchToFeet2(inch) {
    const feetFraction = inch / 12;
    const feet = parseInt(feetFraction);
    const inchRemaining = inch % 12;
    const result = `${feet} feet, ${inchRemaining}inch`;
    return result;
}
const shuvoHeight = inchToFeet(55);
const shuvoHeight2 = inchToFeet2(62);

console.log(shuvoHeight2)

/* 
Miles to Kelometer----------------------->
*/

function mileToKilometer(miles) {
    const kilometer = miles * 1.60934;

    return kilometer;
}

// console.log(mileToKilometer(20))

function kiloToMile(kilo) {
    const miles = kilo * 0.621371;
    return miles;
}
console.log(kiloToMile(20));