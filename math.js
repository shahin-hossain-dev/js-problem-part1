/*
------JS Math------------->
*/

// Math method গুলো javaScript এ কিভাবে থাকে। যেগুলো built in অবস্থায় আছে।

// Math method গুলো এমন object এর মধ্যে এমন function এর মতো করে থাকে।
// -> এগুলো built in আছে এগুলো আমাদের লিখতে হয় না।
/* const Math = {
    min: function (num1, num2) {
        return num1 - num2;
    }
}
console.log(Math.min(20, 32)) */

// ----> Math.min <----
// console.log(Math.min(12, 30, 540, 230, 3, 2, 9));

// ----> Math.max <----

const maxNum = Math.max(20, 10, 30, 50, 60, 100);
// console.log(maxNum);

// ----> Math.PI <----

const piValue = Math.PI;
// console.log(piValue)

// ----> Math.abs <----
// Math absolute
// absolute
// ata negative value holeo positive kore dibe.
// ২টা নাম্বারের Difference
// console.log(Math.abs(5 - 10)); //5
// console.log(Math.abs(-10)); //10

// ----> Math.round <----
// round ভগ্নাংশের নিকটস্থ দশমিক সংখ্যার কাছে চলে যাবে।
console.log(Math.round(2.25)); //2

// ----> Math.floor <----
// ->ভগ্নাংশের নিচের মানের দিয়ে চলে যাবে।
console.log(Math.floor(2.99)); //2

// ----> Math.ceil <----
//->ভগ্নাংশের উপরের মানের দিকে চলে যাবে।
console.log(Math.ceil(2.22)) //3

// ----> Math.random <----

// console.log(Math.random() * 10);
const rand = Math.round(Math.random() * 10);
// console.log(rand)
