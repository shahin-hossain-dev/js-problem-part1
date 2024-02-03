/* 
no-duplicate

-> array has some duplicate elements 

*/

const biriyaniKhor = ['abul', 'dabul', 'abul', 'dabul', 'kabul', 'cabul']
const numbers = [20, 10, 30, 20, 10, 80, 50, 30];

function noDuplicate(elements) {

    const unique = [];
    for (const element of elements) {
        if (unique.includes(element) === false) {
            unique.push(element)
        }
    }
    return unique;
}

const khor = noDuplicate(biriyaniKhor);

const unique = noDuplicate(numbers);
console.log(khor)
console.log(unique)