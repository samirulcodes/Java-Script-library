let myDate=new Date()
console.log(myDate.toString());
console.log(myDate.toDateString);
console.log(myDate.toLocaleDateString);
console.log(typeof myDate); // o/p--> object

// let mycreatedDate=new Date(2024,0,23)
// console.log(mycreatedDate.toLocaleString);

// let mycreatedDate1=new Date(2024,0,23,5,5)
// console.log(mycreatedDate1.toLocaleString); //o/p--> 1/23/2024, 5:05 AM

// let mycreatedDate2=new Date("2024-01-15") //o/p-->yy-mm-dd
// console.log(mycreatedDate2.toLocaleString); //o/p-->1/15/2024
let mycreatedDate3=new Date("01-20-2024") //o/p-->mm-dd-yy
console.log(mycreatedDate3.toLocaleString); //o/p-->1/20/2024

let myTimeStamp=Date.now()
// console.log(myTimeStamp);  // o/p--> in milisecond
// console.log(mycreatedDate3.getTime()); //o/p--> in ms
// console.log(Math.floor(Date.now()/1000)); // converting ms to second

let newDate=new Date()
console.log(newDate);
console.log(newDate.getMonth); // month start from 0 in JS(0 means 1st month)
console.log(newDate.getDay); 

// `${newDate.getDay()} and the time is ......`
newDate.toLocaleString('default',{
    weekday: "long"
})