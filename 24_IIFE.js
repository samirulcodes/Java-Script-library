//  Immedialely Invoked Function Expression (IIFE)
// IIFE ----> Global scope ki pollution se problem hoti h kai baar too uss global scope ki jo variable hai ya jo bhi wha declaration hai uski pollution ki hatane ke liye hmne IIFE ka use kiya

// Declaration of IIFE
// Named IIFE
(function chai() {
    console.log(`DB Connected`);
})();

//  UnNamed IIFE
( (name)=>{
    console.log(`DB Connected 2 ${name}`);
})("AMAN")