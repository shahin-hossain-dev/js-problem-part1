/* 
function takes an array as a parameter 
give me the average of the odd numbers in the array
*/

function oddAverage(numbers) {
    let odds = []; // odd number গুলো এটার মধ্যে আসবে।
    for (const number of numbers) {
        if (number % 2 === 1) {
            odds.push(number)
        }
    }
    let sum = 0;
    for (const number of odds) {
        sum += number;
    }
    const count = odds.length;
    const avg = sum / count;
    // console.log(odds)
    return avg;
}

const numbers = [20, 31, 30, 33, 7];

const avg = oddAverage(numbers);
console.log('Average of the odd numbers is', avg);