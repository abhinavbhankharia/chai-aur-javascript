// for of 

//["","",""]
//[{},{},{}]

const arr = [1,2,3,4,5,6,7,8,9,10]

for (const num of arr) {        //does not require any declaration increment or condition
    console.log(num)            //auto adjusts the loop according to the array
}

const greeting = "Hello World"

for (const greet of greeting) {
    console.log(`Each char is " ${greet}`)    
}

//Maps
//Maps are used to store key value pairs similar to objects. It maintains the order of insertion of keys unlike objects.
const map = new Map()
map.set('IN', 'India')
map.set('US', 'United States')
map.set('FR', 'France')
map.set('IN', 'Indi')  //maintains unique keys and overwrites the value of key 'IN'

console.log(map);

for (const [key,value] of map) {    //destructuring the array
    console.log(key + " : " + value)    
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const [key,value] of myObject) {       //throws error as myObject is not iterable
   console.log(key + " : " + value)    
    
}

