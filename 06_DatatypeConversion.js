let score = "40ab"
// let score = "null"
// let score = "undefined"
// let score = "true" // boolean value either 1 or 0 

console.log(typeof score); // o/p--> String

let valueInNumber = Number(score)
console.log(typeof valueInNumber); // o/p--> number
console.log(valueInNumber); // o/p--> NaN(not a number)


let a = 1          // o/p true
// let a=0        // o/p false
// let a="Aman"  // o/p true
// let a=""      // o/p false , when empty string

let booleanValue = Boolean(a)
console.log(booleanValue);
console.log(typeof booleanValue);



let Str = 10

let StrNum = String(Str)
console.log(StrNum);



//  ***************** OPERATIONS ***************

let value = 3
let negVal = -value
// console.log(negVal);

// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 ** 3); // 2 to the power 3
// console.log(2 / 2);
// console.log(2 % 2);

let str1 = "Hello"
let str2 = " Aman"
let str3 = str1 + str2

console.log(str3);


console.log("1" + 2); // o/p--> 12 
console.log(1 + "2"); // o/p--> 12
console.log("1" + 2 + 2); // o/p--> 122
console.log(1 + 2 + "2"); // o/p--> 32

// console.log(true); // o/p true
// console.log(+true); // o/p 1
// console.log(+ "");  // o/p 0


let num1, num2, num3
num1 = num2 = num3 = 2 + 2  //this is not better way to define the variable

let incr = 100
incr++
console.log(incr); // o/p 101

