const userEmail = "abhinav@google.com"

if (userEmail) {
    console.log("got user email");
}
else{
    console.log("dont have user email");
    
}

//flasy values:
//false, 0, -0, BigInt 0n, null, undefined, NaN, ""

//truthy values:
// "0", "false", " ", [], {}, function(){}

const arr1 = []
if (arr1.length===0) {
    console.log("array is empty");
}

const emptyObj = {}
if (Object.keys(emptyObj).length===0) {
    console.log("object is empty");
}

//Nullish Coalescing operator (??): null undefined 
// this operator checks nulland undefined values and assigns an alternate value
let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10
//val1 = undefined ?? 15 
val1 = null ?? 10 ?? 15


console.log(val1);

//ternary operator
// condition ? true value : false value

const iceteaprice = 100

iceteaprice>=80 ? console.log("greater than 80") : console.log("less than 80");

