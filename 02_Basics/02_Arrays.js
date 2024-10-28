const marvelHeros = ["Thor","Spiderman","Ironman"]
const DCHeros = ["Superman","Batman","Flash"]

//marvelHeros.push(DCHeros)       //this directly pushes array as a single element 

// console.log(marvelHeros);
// console.log(marvelHeros[3]);
// console.log(marvelHeros[3][1]);

const allHeros = marvelHeros.concat(DCHeros)   //concat adds the indvidual elements into a new array
console.log(allHeros);       

const all_heros = [...marvelHeros, ...DCHeros]  //this is spread operator in use
console.log(all_heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const usableArray = another_array.flat(Infinity)    //flattens the array till given depth, here depth is infinity

console.log(usableArray);

console.log(Array.isArray("abhinav"));  //checks if it is array
console.log(Array.from("abhinav"));     //converts into array format
console.log(Array.from({name:"abhinav"}));  //gives empty array as you need to specify key or value to generate array from

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));    //creates array from a set of given elements
