function one(){
  const  username="AMAN"

    function two(){
        const website="Google.com"
        // console.log(username);
    }
    // console.log(website); //throws an error as child class object can't be acces through parent class
    two()

}
one()

if(true){
    const username="samirul"

    if(username=="samirul"){
        const website=" Youtube"
        // console.log(username+website);
    }
}




// *************************INTERESTING*****************
// console.log(addOne(4)) yaha pe nhi function call kar skte hai ye valid hai
function addOne(num){
    return num+1
}
console.log(addOne(4))


// anotehr way to declare function 
// console.log(addtwo(2)) // yha pe nhi function call nahi kar skte hai q ki addtwo() function bhi hai aur variable bhi hai isliye ye valid nhi hoga
const addtwo=function(num){
    return num+2
}
console.log(addtwo(2))