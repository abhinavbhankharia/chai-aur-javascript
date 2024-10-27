//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100               //no need to specify datatype
//const scoreNum:number = 100     you need to specify datatype in typescript, type safety
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];

//objects are in key value pair, dataype inside object can be anything(an object itself)
let myObj = {
    name: "abhinav",
    age: 22,
}


//function, can be treated as a single variable

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);
