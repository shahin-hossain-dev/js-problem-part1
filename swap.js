/*
-------------> Swap Variable <--------------
-> Variable এর মান অদল-বদল।
*/

let a = 5;
let b = 7;

// console.log(a, b)
let temp = a; // a এর মান সেট করার আগে temp এর মধ্যে a এর মানকে রেখে দেয়া হয়েছে।
a = b;
b = temp;
// console.log(a, b);

//-----------------> ‍another system

let x = 5;
let y = 9;

console.log(x, y);

[x, y] = [y, x];
console.log(x, y);

// ------------------ ্
/* 
-> এটা যোগ বিয়োগ দিয়ে করা যায় 
-> bit wise manipulation দিয়ে করা যায়।

*/

