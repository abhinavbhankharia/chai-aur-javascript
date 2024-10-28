let myDate = new Date()         //we have created an object and mydate is an instance of that object 

console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

console.log(typeof myDate);

let myCreatedDate = new Date(2023,0,23,5,3,40,60)  // (year, month, date,hrs,mins,secs,ms); month starts from 0-11

//let myCreatedDate = new Date("2023-01-14")       // this format takes months from 1-12
//let myCreatedDate = new Date("14-01-2023")

console.log(myCreatedDate);
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleString());
console.log(myCreatedDate.getTime());               // gives time in miliseconds

let myTimeStamp = Date.now()
console.log(myTimeStamp);                           // gives time in milliseconds format 


let newDate = new Date()

console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getMonth()+1);

newDate.toLocaleString('default',{
    weekday:"long"
})
