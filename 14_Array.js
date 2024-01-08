const arr=[1,2,3,4]
// const arr2=["aman","samirul"]
// const arr3=new Array(1,2,3,4,5)
console.log(arr[2]); //o/p-->3

// Array Methods
arr.push(5)
console.log(arr); //op/p--> 1,2,3,4,5

arr.pop
console.log(arr); // remove last elemnet from array..in this case 5 will remove from array

arr.unshift(0)
console.log(arr); //add numeber(0) at the beggining of the element....in this case 0,1,2,3,4,5
arr.shift(0)
console.log(arr); //remove numeber(0) at the beggining of the element....in this case 1,2,3,4,5

console.log(arr.includes(8)); //oi/p--> false because 8 is not include
console.log(arr.indexOf(4)); //o/p-->3

const newArr=arr.join()
console.log(arr); // o/p-->[1,2,3,4,5]
console.log(newArr); // o/p-->1,2,3,4,5 and this is converted into string


// Slice , Splice

console.log("A ", arr); // o/p-->A [1,2,3,4,5]
const myArr2=arr.slice(1,3) //start from  index 1 & 3rd index will not includ
console.log(myArr2);  //o/p-->[2,3]

const myArr3=arr.splice(1,3)
console.log("b ",arr); //jo slice me include hogya hai wo splice element splice me include nahi hoga..in this case only 1 left from array
console.log(myArr3); //o/p-->[2,3,4]