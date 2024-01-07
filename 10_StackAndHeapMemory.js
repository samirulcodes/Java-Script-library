//  2 types of memory are stack(primitive) & heap(non-primitive)

// STACK
let myName="AMAN"
let anotherName=myName
anotherName="Samirul"

console.log(myName);  // o/p--> AMAN
console.log(anotherName);   // o/p--> Samirul


// HEAP
let user1={
    email: "samirul@google.com",
    name: "aman",
}

let user2=user1

user2.email="amanm@google.com"  //any object can be access through dot(.)

console.log(user1.email);
console.log(user2.email);