/*
-------------> Date <--------------
*/
// আজকের তারিখ বের করার জন্য।
const today = new Date();

// specific date পাওয়ার জন্য

const date = new Date('2050-10-19');

// এখান থেকে বিভিন্ন মান বের করা যেতে পারে।
// এখানে getMonth 10 দিয়ে আমরা 9 পাওয়ার কারণ হলো। months গুলো array আকারে থাকে index হিসাবে ভ্যালু get, set etc. করতে হয়।

console.log(date.getMonth()); //9
console.log(date.getDay());//3

const specificDate = new Date(2030, 3, 19);
// মান সেট করা যায়।
specificDate.setMonth(10)
// en-GB -> english-Great Briten format dd/mm/yyyy 
console.log(specificDate.toLocaleString('en-GB'));


// 1970-01-01 এই পর্যন্ত যত milisecond হয়েছে তা বের করা যায়। এটাকে বলা হয়।unix epoc
// এটা সাধারণত ব্যবহার করা হয় ২টা টাইমের মধ্যবর্তী টাইমের পার্থক্য বা Compare করার জন্য।

// unix epoc

// আরেকটা জিনিস হলো time zone এটা UTC maintain করে চলে।
// আরেকটা সিস্টেম হলো daylight saving 