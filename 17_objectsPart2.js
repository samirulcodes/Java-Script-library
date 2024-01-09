// const gameApp=new Object() //singleton object
const gameApp2 = {}   //non-singleton object
// console.log(gameApp); //o/p-->{}
// console.log(gameApp2);  //o/p-->{}


gameApp2.id = "123ab"
gameApp2.name = "aman"
// console.log(gameApp2); //o/p-->{ id: '123ab', name: 'sam'}

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "samirul",
            lastname: "islam"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname); //o/p--> samirul

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }
const obj3 = { 5: "a", 6: "b" }

// const obj4 = { obj1, obj2 }
// const obj4 = Object.assign({}, obj1, obj2, obj4)

const obj4 = { ...obj1, ...obj2 } // this is called spread operator
// console.log(obj4);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(gameApp2)); //only key  wil come  and conveted into aaray--> ['id', 'name']
console.log(Object.values(gameApp2)); //only  value wil come  and conveted into aaray--> ['123ab', 'aman']
console.log(Object.entries(gameApp2)); //[ ['id': '123ab'],[ 'name': 'sam'] ]

console.log(gameApp2.hasOwnProperty('name')); //true
console.log(gameApp2.hasOwnProperty('named')); //false

