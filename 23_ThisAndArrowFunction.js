const user = {
    username: "samirul",
    price: 499,

    welcomeMessage: function () {
        console.log(`${this.username} , welcome to website`);
        console.log(this); // current context
    }
}
// user.welcomeMessage()
// user.username="aman" // changing the username--> changing the context
// user.welcomeMessage()

// console.log(this); //o/p-->{} -> empty , q ki global object pe kch declare nhi h, ye function ke bahar declare h
// most global object is WINDOW object


// function chai(){
//     username:"SAM",
//     console.log(this); // o/p-> something big o/p
//     // console.log(this.username);// o/p-> undefined -->q ki ye function k andr work nhi krta ye sirf object k andr wokr krega
// }
// chai()


// ARROW FUNCTION

const chai=()=>{ // only function keyword will remove for arrow function
    username:"AMAN"
    console.log(this); //{} empty
    console.log(this.username); // undefined, it does not work with in function
}
// chai()

// Basic arrow function
// const add=(num1,num2)=>{
//     return num1+num2
// }
// console.log("the value is",add(2,4));


// implicit return
// const add=(num1,num2)=>  num1+num2 // in implicit return remove both curly{} braces and return also

// const add=(num1,num2)=>  (num1+num2) // agr curly brace{} hai to return keyword likhna hi hoga and agr simple bracket i.e parenthesis() hua to return keyword likhna nhi hoga

// const add=(num1,num2)=>  {username:"aman"} //o/p-> undefined q ki object ko parenthesis() k andr wrap krna hoga
const add=(num1,num2)=>  ({username:"aman"})
console.log("the value is",add(2,4));