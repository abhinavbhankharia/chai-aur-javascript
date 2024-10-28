//copy operations on arrays create shallow copies, changes are made to original array as well

const myArr = [3,5,1,6,7]
const myArr2 = new Array(3,5,1,6,7)

console.log(myArr[4]);

//Array Methods

myArr.push(6)           //adds value at the end of array
console.log(myArr);

myArr.pop()             //removes value at the end ofarray
console.log(myArr);

myArr.unshift(9)        //adds value at the start of array
console.log(myArr);     
myArr.shift()           //removes value at the start of array
console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.indexOf(9));

const newArr = myArr.join()     //converts array to srting
console.log(newArr);            


//slices
const mynewArr = myArr.slice(1,3)

console.log(mynewArr);          //does not change the original array
console.log(myArr);

//splice
const mynewArr2 = myArr.splice(1,3)

console.log(mynewArr2);         //changes the original array
console.log(myArr);

