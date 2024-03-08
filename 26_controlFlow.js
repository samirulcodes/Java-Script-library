// const isUserLoggedIn=true

// if(isUserLoggedIn){
//     console.log("Logged In");
// }
// if(2==="2"){
//     console.log("YES");
// }
// else{
//     console.log("NO");
// }
// if(2!=3){
//     console.log("True");
// }
// let temperature=50
// if(temperature==50){
//     console.log("Temperature is 50 degree");
// }
// else{
//     console.log("Temperature is not 50 degree");
// }

// <,>,<=,>=,==,!=,===,!==

//  const score=200
//  if(score>100){
//     let power="fly"
//     console.log(`User Power: ${power}`);
//  }

//  console.log(`User Power: ${power}`); //Throws an error because power can't be access outside the scope

// ShortHand Notation

// const balance=1000
// if(balance>500) console.log("Balance"); //Implicit scope
// // if(balance>500) console.log("Balance"),console.log("Balance2"); // don't write code in this way

// if(balance<500){
//     console.log("Balance less than 500");
// } else if(balance<900){
//     console.log("Balance less than 500");
// }
// else if(balance<=1000){
//     console.log("Balance is equal to 1000");
// }else{
//     console.log("Incorrect Balance");
// }

// const isUserLoggedIn=true
// const debitCard=true
// if(isUserLoggedIn && debitCard && 1==1){
//     console.log("Allow to buy course");
// } else{
//     console.log("You are not eligible");
// }

// const loggedInFromGoogle=false
// const loggedInFromEmail=true
// if(loggedInFromGoogle || loggedInFromEmail){
//     console.log("LoggedIn Successfully");
// }

// Switch statement

// const month=4
// switch (month) {
//     case 1:
//         console.log("January");
//         break;
//     case 2:
//         console.log("February");
//         break;
//     case 3:
//         console.log("March");
//         break;
//     case 4:
//         console.log("April");
//         break;

//     default:
//         console.log("Invalid !");
//         break;
// }

// const month1="october"
// switch (month1) {
//     case "jan":
//         console.log("January");
//         break;
//     case "feb":
//         console.log("February");
//         break;
//     case "june":
//         console.log("June");
//         break;
//     case"october":
//         console.log("October");
//         break;

//     default:
//         console.log("Invalid 2 !");
//         break;
// }


// Truthy anf Falsy

// const userEmail = "sam@gmail.com"
// // const userEmail=""   // o/p-> else condition will execute
// // const userEmail=[]   // o/p-> if condition will execute
// if (userEmail) {
//     console.log("Got user email");
// } else {
//     console.log("dont have user email");
// }

// Falsy value

// false , 0,-0, BigInt 0n,"",null,undefined,NaN

// Truthy Value

// "0", 'false', " ",[], {}, function(){}

// const userEmail1=[] 
// if(userEmail1.length===0){
//     console.log("Array is empty");
// }

// const emptyObject={}
// if(Object.keys(emptyObject).length===0){
//     console.log("Object is Empty");
// } else{
//     console.log("Object is not Empty");
// }


// console.log(false==0); //o/p--> true
// console.log(false==''); //o/p--> true
// console.log(0==''); //o/p--> true


// Nullish Coalescing Operator (??): null undefined

let val1
// val1= 5??10
// val1= null ?? 10
// val1=undefined ?? 15
// val1=null ?? 10?? 20
val1=undefined ?? 10?? 20


console.log(val1);



// Terniary Operator

// condition?true:false

const teaPrice=100
teaPrice>=90?console.log("Less than 90"):console.log("More than 90");
teaPrice>=101?console.log("Less than 90"):console.log("More than 90");
