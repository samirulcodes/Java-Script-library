// High order array loops:(for array:for of loop, for object: for in loop)
// 1. for of loop

// ["","",""]
// [{},{},{}]

let arr=[1,2,3,4,5]

for (const i of arr) {
    // console.log(i);
}

const greeting="hellow world"
for(const a of greeting){
    // console.log(a);
}

const map=new Map()
map.set('IN',"India")  // ('key',"value")
map.set('FR',"France")
map.set('CH',"China")
map.set('IN',"India") // it will not print again because map is unique in the map collection

// console.log(map);  //o/p->Map(3) { 'IN' => 'India', 'FR' => 'France', 'CH' => 'China' }


for (const key of map) {
    // console.log(key); //  o/p-> [ 'IN', 'India' ],[ 'FR', 'France' ], [ 'CH', 'China' ]  , this is print together
}

// if you want to print key and value separately,use this method:

for (const [key,value] of map) {
    // console.log(key, ":",value);
}

/*
const myObj={
    'game1':'Free Fire',
    'game2':'PubG',
}
for (const [key,value] of myObj) {
    console.log(key, value);
}
*/ // for of loop doesn't work in object


// for in loop

const myObj={
    js:"java script",
    cpp:"c++",
    py:"python",
    swift:"swift"
}
// printing only key
for (const key in myObj) {
//   console.log(key);
}
// printing only value
for (const key in myObj) {
//   console.log(myObj[key]);
}
// printing both key and value
for (const key in myObj) {
//   console.log(`${key} shortcut is for ${myObj[key]}`);
}

// for in loop in array

const arr1=["c","c++","js","py","java"]

for(const key in arr1){
    // console.log(arr1[key]); //o/p-> c,c++,js, py,java
}
for(const key in arr1){
    // console.log(key); //0,1,2,3,4
}

/*
const map1=new Map()
map1.set('IN',"India")  // ('key',"value")
map1.set('FR',"France")
map1.set('CH',"China")
map1.set('IN',"India")


 console.log(map1); //o/p->{ 'IN' => 'India', 'FR' => 'France', 'CH' => 'China' }

for (const key in map1) {
     console.log(key); // it is not itterable, it neither print anything nor throw error
}
*/


// for each loop


const coding=["c","c++","js","py","java"]

// coding.forEach( function (val){   // due to call back function there is no name of function, here val is a parameter 

// console.log(val); 
// } )

// Arrow function
// coding.forEach( (item) => {
//     console.log(item); 
// })


function printMe(item){
    // console.log(item);
}

coding.forEach(printMe)

coding.forEach((item,index,arr)=>{
    // console.log(item,index,arr);
})

// Declaring object in Array-->[{}.{},{}]
const myCoding=[
    {
     lnaguageName:"JavaScript",
        lnaguageFileName:"js"
    },
    {
        lnaguageName:"Java",
        lnaguageFileName:"java"
    },
    {
        lnaguageName:"python",
        lnaguageFileName:"py"
    },
]

myCoding.forEach( (item)=>{
    console.log(item.lnaguageName,item.lnaguageFileName);
} )