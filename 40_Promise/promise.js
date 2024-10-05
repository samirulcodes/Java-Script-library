// Creating promise
const promiseOne = new Promise(function (resolve, reject) {
    // Do an async task :-
    // DB calls, cryptography, network

    setTimeout(function () {
        console.log('Async task is complete');
        resolve() // connecting reolve and .then(line- 13)
    }, 1000)
})

// consume promise
promiseOne.then(function () {  // direct connection b/w resolve and .then
    console.log('promise consumed');
})

// diff syntax of promise
// creating 2nd promise

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('async task 2');
        resolve()
    }, 1000)
}).then(function () {
    console.log('Async 2 resolved');
})


// creating 3rd promise

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "aman", email: "chai@gmail.com" }) // passing parameter as an obj
    }, 1000)
})

promiseThree.then(function (user) {  // consumimg passing parameter 
    console.log(user);
})


// creating 4th promise
const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: "sam", password: "123" })
        } else {
            reject('ERROR:something went wrong')
        }
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((myusername) => {  // chaining to access username or password
    console.log(myusername);
}).catch(function (error) {
    console.log(error);
}).finally(() => console.log('The promise is either resolved or rejected'))


const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: "javascript", password: "123" })
        } else {
            reject('ERROR:JS went wrongs')
        }
    }, 1000)
})

// promise using try catch
async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()


// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log("E:", error)
//     }
// }

// getAllUsers()


fetch('https://api.github.com/users/hiteshchoudhary').then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>console.log(error))