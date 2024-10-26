console.log(2 > 1);         //gives boolean values
console.log(2 < 1);
console.log(2 >= 1);
console.log(2 == 1);
console.log(2 != 1);


console.log("2" > 1);       // here string gets converted to numnber automatically, hence output is boolean value
console.log("02" > 1);

console.log(null > 0);      //this gives false as output
console.log(null == 0);     //this gives false as output
console.log(null >= 0);     //this gives true as output, this is because of value conversion problem
//equality check == works differently than compariosions < > <= >=. Comparisions convert null to 
//number, treating it  as 0. hence resulting in false.

console.log(undefined == 0);
console.log(undefined < 0);
console.log(undefined > 0);

console.log("2" === 1); //this is strict check and checks for value as well as datatype