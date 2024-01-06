// console.log(2>1);
// console.log(2>=1);
// console.log(2,1);
// console.log(2<=1);
// console.log(2==1);
// console.log(2!=1);

// console.log("2" > 1);   //o/p --> true
// console.log("02" > 1);  //o/p --> true


console.log(null > 0);  //o/p --> false
console.log(null == 0);  //o/p --> false
console.log(null >= 0);   //o/p --> true


console.log(undefined == 0);  //o/p --> false
console.log(undefined < 0);  //o/p --> false
console.log(undefined > 0);   //o/p --> false

// === --> triple equal check data type also
console.log("2" ===2); // 2 is string and another 2 is number, so this is not equal


// note --> this type of conversion create problem anytime, so try to avoid this type of conversion and make code clean