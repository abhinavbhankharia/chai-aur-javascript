let score = null

console.log(typeof score)
console.log(typeof(score))


let valueInNumber = Number(score)

console.log(valueInNumber); //NaN not a number
console.log(typeof(valueInNumber));

// "33" => number
// "33hello" => NaN
// "True" => 1 ; "False" => 0
// undefined => NaN
// null => 0 



let isLoggedIn = 1
let booleanisLoggedIn = Boolean(isLoggedIn)
console.log(booleanisLoggedIn);

// 1 = true; 0 = false
// "" => false
// "hello" => true

let someNumber = 33
let StringNumber = String(someNumber)
console.log(StringNumber);
console.log(typeof StringNumber);