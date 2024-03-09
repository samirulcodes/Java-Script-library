// for loop

for (let i = 1; i <= 10; i++) {
    if (i == 4) {
        // console.log("Heyy! What's up");
    }
    // console.log(i);
}


for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop value ${j} and outer loop ${i}`);

        // Table printing from 1 to 5

        // console.log(i+'*'+ j + ' = ' + i*j);
        // console.log(`${i} * ${j} = ${i*j}`);

    }
}
let arr = ["Aman", "Samirul", "Hitesh"]
// console.log("The lenght of array is ", arr.length);
for (let i = 0; i < arr.length; i++) {
    // if i <=arr.length declare then the o/p will be aman samirul hitesh and undefined aslo bcause <= , so that declare only <
    // console.log(arr[i]);

}

for (let i = 0; i <=10; i++) {
    if(i==4){
        // console.log(`Detected 4`);
        break
    }
    // console.log(`the value of i is ${i}`);
}

for (let i = 0; i <=10; i++) {
    if(i==4){
        console.log(`Detected 4`);
        continue
    }
    console.log(`the value of i is ${i}`);
    
    
}

