// NUMBER

const score = 100
// console.log(score); //o/p-->100

const balance = new Number(50)
// console.log(balance); //o/p--> [Number: 100]

// console.log(balance.toString().length); //o/p--> 2
// console.log(balance.toFixed(2)); //o/p--> 50.00

const otherName = 123.8989
// console.log(otherName.toPrecision(4)); //o/p-->123.9

const hundreds = 100000
// console.log(hundreds.toLocaleString('en-IN')); // o/p-->10,00,000


// ******************** MATHS ********************

// console.log(Math); //o/p--> object [Math] {}
// console.log(Math.abs(-2)); // o/p--> -2 convert into 2 ,i.e; convert -ve num to +ve num
// console.log(Math.round(4.6)); //o/p--> 5
// console.log(Math.ceil(4.2)); //o/p--> 5
// console.log(Math.floor(4.8)); //o/p--> 4
// console.log(Math.min(5, 3, 2, 8)); //o/p--> 2
// console.log(Math.max(5, 3, 2, 8)); //o/p--> 8

console.log(Math.random()); //provide value b/w 0 & 1
console.log((Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);


const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min);  // provide value always greater than 10
