function calculateCartprice(...num1) {// ... is rest operator
// function calculateCartprice(val1,val2,...num1) // 200 & 100 will not include only 1500 will include
    return num1

    // console.log(calculateCartprice(200,100,1500));  // o/p--> [200,100,1500]
}
// passing object into function
 const user={
    name:"Aman",
    price:99
 }

 function handleObject(anyObject){  // taking parameter
    console.log(`Username  is ${anyObject.name} and price is ${anyObject.price}`);   /
 }

//  handleObject(user) 
handleObject({ // another way to declare
    user:"samirul",
    price:200
})

// passing array into function
const newArray=[100,200,300,400]

    function returnSecondVlaue(getArray){
        return getArray[1]
}

console.log(returnSecondVlaue(newArray));
// console.log(returnSecondVlaue([100,200,300,400]));

