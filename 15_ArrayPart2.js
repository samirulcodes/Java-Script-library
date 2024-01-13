const marvel = ["thor", "Irnoman", "spiderman"]
const dc = ["superman", "flash", "batman"]

marvel.push(dc)
// console.log(marvel);
// console.log(marvel[3][1]);

const heros = marvel.concat(dc)
// console.log(heros); //['thor','Irnoman','spiderman' 'superman','flash','batman']

//Spread Operator(easy than concat method)
const heros2 = [...marvel, ...dc]
// console.log(heros2); //['thor','Irnoman','spiderman' 'superman','flash','batman']

const another_array = [1, 2, 3, [4, 5, 6], 7, [8, 9, [6, 8]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array); //o/p-->[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 6, 8 ]



console.log(Array.isArray("Aman")); //o/p--> false
console.log(Array.from("Aman")); //o/p-->[ 'A','m','a','n']
console.log(Array.from({name: "Aman"}));  //o/p--> interestintg i,e; [] array


let score1=10
let score2=20
let score3=30

console.log(Array.of(score1,score2,score3)); //o/p--> [10, 20, 30 ]
