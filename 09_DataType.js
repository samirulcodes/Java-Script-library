// Primitive dataTypes

// 7 types: String , Number , boolean, null , undefined, symbol, BigInt


const score=100
const scoreValue=100.3  
const isLoggedIn=false
const outsideTemperature=null

let userEmail; //o/p undefined, as no value is declare

const id=Symbol('12')
const anotherId=Symbol('12')

console.log(id==anotherId);  // o/p false

const bigNumber=1232455667789536455454n // put n at last of number so that it will automatically convert into bigInt



// Non-Primitive (Reference types)

// Array , Objects , Functions


 const heros =["shaktimaan" , "srk" , "sk"]; // array
 let myObj={   //{} --> Objects decalre in curly braces
    name:"aman",
    age1 : 20,
 }

const myFunction=function(){
    console.log("hello world");
}
  

console.log(typeof outsideTemperature); //o/p--> object
console.log(typeof outsideTemperature); //o/p--> object
console.log(typeof  myFunction); //o/p--> function
console.log(typeof  heros); //o/p--> object
console.log(typeof anotherId); //o/p--> symbol