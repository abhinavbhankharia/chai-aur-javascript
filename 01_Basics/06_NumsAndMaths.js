const score = 400
console.log(score);
console.log(typeof score);


const balance = new Number(100)     //explicitly defining datatype as number
console.log(balance);
console.log(typeof balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNum = 23.4792

console.log(otherNum.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));


// ++++++++++++++++++++ Maths +++++++++++++++

console.log(Math);

console.log(Math.abs(-4));      //gives absolute values, converts negative numbers to positive
console.log(Math.round(56.76)); //gives rounded off values
console.log(Math.ceil(56.76));  //rounds up values to the nearest bigger integer
console.log(Math.floor(56.76)); //rounds up values to the nearest smaller integer
console.log(Math.min(4,2,6,8));  
console.log(Math.max(4,2,6,8));

console.log(Math.random());     //gives random values between [0,1), 1 is exclusive
console.log((Math.random()*10)+1);    //adding 1 ensures minimum value of 1
console.log(Math.floor((Math.random()*10)+1));  //floor functions gives rounded off int


//defining max and min values for random function
const min = 50
const max = 100

console.log(Math.floor(Math.random()*(max-min+1)+min))
//here random fucntion is multiplied by the range to give values b/w max and min
//adding min to ensure the lowest value is above min
//using floor function to round off to nearest int