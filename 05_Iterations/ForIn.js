const myObject = {
    js : 'Javascript',
    cpp : 'C++',
    rb : 'Ruby',
    swift : 'Swift by Apple'
}

for (const key in myObject) {
    console.log(`${key} shirtcut is for ${myObject[key]}`)
}

const programming = ["js", "cpp", "rb", "swift","py"]

for (const key in programming) {
    //console.log(key);                  //prints the index of the array
    console.log(programming[key]);      //prints the value of the array
}


const map = new Map()
map.set('IN', 'India')
map.set('US', 'United States')
map.set('FR', 'France')
map.set('IN', 'Indi')

for (const key in map) {
    console.log(key);               //no output as map is not iterable                           
}