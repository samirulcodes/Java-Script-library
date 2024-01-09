// function sayMyName(){
//     console.log("a");
//     console.log("m");
//     console.log("a");
//     console.log("n");
// }
 // sayMyName()


//  function addTwoNum(num1,num2){
//     console.log(num1+num2);
//  }
//  addTwoNum(2,4) //o/p-->6
// const result = addTwoNum(2, 4)  //it will print NaN, because, directly call console.log rather than declaring return num1+num2


function addTwoNum(num1, num2) {
    // let result=num1+num2
    // return result
    return num1 + num2
}
// addTwoNum(2,4)
const result = addTwoNum(2, 4)  
// console.log("result: ", result);

function loginUser(userName="sam"){ // agr koi argument pass nhi kiye to default value sam le lega
    if(userName=== undefined){
        console.log("Please enter a user name");
       // return // ye return dene se aage ka code execute nhi hoga aur pehley arguments pass karo
    }
    return `${userName} logged in`
}
console.log(loginUser("Aman")); //o/p--> Aman logged in 
// console.log(loginUser("")) //logged in 
// console.log(loginUser()) // undefined logged in 
 
