const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNumbers.map((num) => {return num+10})
console.log(newNums);

//chainning map and filter
//each method will perform the operation on the values of previous method
const newNum = myNumbers.map((num) => num*5).map((num) => num+1).filter((num) => num>30)
console.log(newNum);