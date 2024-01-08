// singleton
// Object.create

// object literals

const mySymbol = Symbol("key1")


const JsUser = {
    name: "aman",
    "full name": "samirul islam",
    [mySymbol]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "aman@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySymbol])

JsUser.email = "aman@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "aman@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());