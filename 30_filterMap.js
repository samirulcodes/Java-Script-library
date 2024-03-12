// const coding = ["js", "ruby", "java", "python", "cpp"]


// const values = coding.forEach( (item) => {
//     //console.log(item);
//     return item  // for Each does not return any thing
// } )

// console.log(values);


// FILTER
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => num>4 )//o/p->5 6 7 8 9 10

// const newNums = myNums.filter( (num) => {
//     num > 4  o/p-->[]
// } )  

// console.log(newNums);//  o/p-->[]

const newNums = myNums.filter((num) => { // filter-> only true/false condition 
  return num > 4

})
// console.log((newNums)); // o/p-> 5 6 7 8 9 10

// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )

// console.log(newNums);  // o/p-> 5 6 7 8 9 10


const books = [
  { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
  { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
  { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
  { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
  { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
  { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
  { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
  { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

// let userBooks = books.filter( (bk) => bk.genre === 'History')

// let userBooks=books.filter((bk)=> bk.title=='Book Two' && bk.genre=='Non-Fiction')

// let userBooks=books.filter((bk)=>bk.edition>=2000)

//let userBooks = books.filter( (bk) => { 
//     return bk.publish >= 1995 && bk.genre === "History"
// })

// let userBooks=books.filter((bk)=>{
//   return bk.genre=='Scinece' || bk.publish>=2020
// })     here if return will not declare then its output will be ->[] because of scope->{ }

let userBooks = books.filter((bk) => {
  return bk.publish >= 2000
})
// console.log(userBooks);



// MAP
const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNum=myNum.map((num)=>{
//   return num+10 // here if return will not declare then its output will be undefined , because of scope->{ }
// })
// const newNum=myNum.map((num)=>num+10)

// chaining
const newNum = myNum
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num >= 50)  // filter-> only true condition will execute
// console.log(newNum); //o/p--> [ 51, 61, 71, 81, 91, 101 ]



// REDUCE
const myNums1 = [1, 2, 3]  // -> current value

// const myTotal = myNums1.reduce(function (acc, currVal) {
//   console.log(`accumulator val: ${acc} and current val: ${currVal}`);  // o/p-> 0,1 , 1,2 and 3,3 
//   return acc + currVal

// }, 0)   // here 0 is initial value which means accumulator strt counting wihh 0
// console.log(myTotal);  // o/p-> 6


// Now doing With Arrow Function
// const myTotal=myNums1.reduce((acc,current)=>acc+current,0)  // 0 is the initial val means acc strt wiht 0
// console.log(myTotal);  // o/p-> 6


const shoppingCart=[
  {
    itemName:"js course",
    price: 1999
  },
  {
    itemName:"py course",
    price: 2999
  },
  {
    itemName:"java course",
    price: 3999
  },
]

const TotalToPay=shoppingCart.reduce((acc,item)=>acc+item.price,0)

 
console.log(TotalToPay);