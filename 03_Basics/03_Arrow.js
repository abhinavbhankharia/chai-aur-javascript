const user = {
    username : "abhinav",
    price : 999,
    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);       //whenever you need to refer current context, this keyword is used
        console.log(this);      //this gives all the currect context
        

    }
}

// user.welcomeMessage();
// user.username = "sam"
// user.welcomeMessage();

console.log(this);          //this gives empty object as this code is being run in node environment, in browser it gives window objects 

// function chai(){
//     let username = "abhinav"
//     console.log(this.username);     //this keyword cannot be used in functions, can only be used in objects
// }
// chai()

// const chai = function(){
//     let username = "abhinav"
//     console.log(this.username);
// }
// chai()

const chai = () => {                //this is an arrow function
    let username = "abhinav"
    console.log(this);
}
chai()

// const addTwo = (num1,num2) => {
//     return num1+num2
// }
//const addTwo = (num1,num2) => num1+num2       //implicit return, does not require return keyword
//const addTwo = (num1,num2) => (num1+num2)       //parantheses are used because objects cannot be returned without parantheses
const addTwo = (num1,num2) => ({name: "abhinav"}) 
console.log(addTwo(12,11));

const myArray = [2,5,3,6,9]
myArray.forEach(()=> {})
