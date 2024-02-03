/* 
    Check Lear Year----------------->

*/
/* 
Simple Leap Year--->
-> year will be leap year if the year is divisible by 4
*/

function isLeapYear(year) {

    if (year % 4 === 0) {
        return true;
    }
    else {
        return false;
    }
}

const year1 = isLeapYear(2024);
// console.log(year1);

/* 
Leap year Mail Logic 

1. those year that is not divisible by 100 and if the year is divisible by 4. that is the leap year.
2. if the year divisible by 400, then it is a Leap year.
3. else it is a not leap year.
*/

function isLeapYear1(year) {
    if (year % 100 !== 0 && year % 4 === 0) {
        return true;
    }
    else if (year % 100 == 0 && year % 400 === 0) {
        return true;
    }
    else {
        return false;
    }
}

const leapYear = isLeapYear1(2000);
console.log(leapYear)