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



//=========================================
//     Memory

//1) Stack
//   Used in Primitive datatype

    let firstName = "abhinav"
    let secondName = firstName

    secondName = "Bhankharia"
    console.log(firstName);
    console.log(secondName);

//2) Heap
//    Used in Non-Primitive datatype, uses memory references

let userOne = {
    email:"user@google.com", 
    upi : "abc@ybl"
}

let userTwo= userOne

userTwo.email = "abhinav@google.com"        //here changing mail of one user changes the emial for tother user as well, as it uses memmroy refernece

console.log(userOne.email);
console.log(userTwo.email);




