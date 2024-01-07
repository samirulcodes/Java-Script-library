const name="aman"
const repoCount=10

// console.log(name+repoCount+ "hii"); //o/p aman10 hii

console.log(`hello my name is ${name} and my repositories count is ${repoCount}`);

// aAnother way to declare String

const gameName=new String('samirul-aman')
console.log(gameName.split('-')); // o/p--> ['samirul' , 'aman'] 

console.log(gameName[0]); //o/p-->s
console.log(gameName.__proto__); //o/p-->{}


console.log(gameName.length()); //o/p-->samirul=7
console.log(gameName.toLocaleUpperCase());  //o/p-->SAMIRUL
console.log(gameName.charAt(2));  //o/p-->m
console.log(gameName.indexOf('m'));  //o/p-->2

const newString=gameName.substring(0,4)
console.log(newString); //o/p--> sami , 4 is not included(r)

 const anotherString=gameName.slice(-7,4)
 console.log(anotherString);  // o/p--> ami

 const newString1="  aman   "
 console.log(newString1.trim()); //o/p--> aman, remove unwanted start and end space 
 const url="https://aman%20samirul.com"
 console.log(url.replace('%20' , '-')); //o/p--> https://aman-samirul.com   --->  remove %20 and - will added in place of %20

 console.log(url.includes('aman')); //o/p-->true
 console.log(url.includes('islam')); //o/p-->false 