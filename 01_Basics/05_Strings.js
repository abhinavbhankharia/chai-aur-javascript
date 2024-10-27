const name = "abhinav"
const repoCount = 50

// console.log(name + repoCount + " value");        this is not recommended

console.log(`hello my name is ${name} and my repo count is ${repoCount}`); //here we are using string interpolation, we create placeholders and inject variable directly

const gameName = new String('abhinav-bhankharia')        //another method to declare a string

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.toUpperCase());

console.log(gameName.charAt(4));

console.log(gameName.indexOf('v'));

console.log(gameName.toUpperCase());

console.log(gameName.slice(0,4));

const newString = "   abhinav    "
console.log(newString);
console.log(newString.trim());

console.log(gameName.replace('-','*'));

console.log(gameName.includes("abhi"));
console.log(gameName.includes("hello"));

console.log(gameName.split("-"));       //returns parts of sttring after spliting using the separator