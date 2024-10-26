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

//*********      OPERATIONS      **********

let value = 3
let negValue = -3
console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3); // power
console.log(3/2);
console.log(3%2);

let str1 = "hello"
let str2 = " abhinav"
let str3 = str1 + str2
console.log(str3);  //simple string addition, subtaction not possible

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 1 + 2);
console.log(1 + 1 + "2");

console.log(+true); //this gives 1 as boolean value
console.log(+"");   //this gives 0 as boolean value

let num1, num2, num3
num1 = num2 = num3 = 2 + 2      //bad code readability

let gameCounter = 100
gameCounter++;
console.log(gameCounter);
