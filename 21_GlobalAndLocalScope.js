 var c=100
 let a=200 //global scope

 if(true){ // block scope or local
    let a=10
    const b=20
    // var c=30
    //  c=30
    console.log("Inenr scopoe ",a);
 }

 
 console.log(a);
//  console.log(b);
//  console.log(c);