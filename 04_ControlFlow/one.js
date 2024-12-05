//if

const isUserLoggedIn = true

if (2!=3) {
    console.log("executed");
    
}

if (2=="2") {
    console.log("executed");
    
}

if (2==="2") {
    console.log("executed");
    
}

//>,<,>=,<=,==,!=,===

// const score = 200
// if (score>100) {
//     const power = "fly"
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);

const balance = 1000

// if (balance>500) console.log("test"), console.log("test2");  this syntax is not recommended

if (balance<500){
    console.log("less than 500");
} 
else if (balance<750){
    console.log("less than 750");
}
else if (balance<900){
    console.log("less than 900");
}
else{
    console.log("less than 1200");
}


const userLoggedIn = true
const debitCard = true
const loginFromGoogle = false
const loginFromEmail = true

if (userLoggedIn && debitCard) {
    console.log("allow to buy course");
}

if (loginFromEmail || loginFromGoogle) {
    console.log("user logged in");
}