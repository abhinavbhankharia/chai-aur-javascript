//javascript shows prototypal behavior, it searches on all levels(parents, grand parents and so on until it gets null values)
//due to such behavior, 'this','new',classes, inhertitance work in javascript
//you do not have this word access in arrow functions due to prototype
//everything in javascript is an object
//array, string etc are all objects.

function multiplyByFive(num){
    return num*5
}

multiplyByFive.power = 2

console.log(multiplyByFive(5));
console.log(multiplyByFive.power);      //function behaves like a object as well
console.log(multiplyByFive.prototype);  //returns empty brackets, current context of the method 


function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    ++this.score
}
createUser.prototype.printme = function(){
    console.log(`price is ${this.score}`);
    
}

//const chai = createUser("chai", 25)   //this does not work, you need to use new keyword for the new prototype to be added
const chai = new createUser("chai", 25)     
const tea = new createUser("tea",250)

chai.increment()
chai.printme()

/*
Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the 
constructor function. This means that it has access to properties and methods defined on the 
constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this 
is bound to the newly created object. If no explicit return value is specified from the constructor, 
JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a 
non-primitive value (object, array, function, etc.), the newly created object is returned.
*/