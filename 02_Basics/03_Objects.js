//objects have key-value pairs.

//singleton: object create using constructor, there is only one instance of the object 
//Object.create        this creates objects through constructor, singleton

//object literals: object created using literals, they have multiple instances

const mySym = Symbol("key")      //declaring symbol

const JsUser = {            //object creation using literals
    name:"abhinav",
    "full name": "abhinav bhankharia",
    age:24,
    location: "jaipur",
    email: "abhinav@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","wednesday"],
    [mySym]: "mykey1"           //using symbol in object as a key-value pair
    
}          

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);     //accessing symbol value inside an object

JsUser.email="abhinav@yahoo.com"        //over riding values in an object
console.log(JsUser.email);

// Object.freeze(JsUser)                //freezing values of an object which restricts from changing the values.
// JsUser.email="abhinav@microsoft.com" 
// console.log(JsUser);

JsUser.greetings = function(){           //declaring a function greetings for object JsUser
    console.log("hello JS user");
}

console.log(JsUser.greetings());

console.log(JsUser.greetings);          //this provides function return back, function is not executed, only refernce is recieved 


JsUser.greetingsTwo = function(){           
    console.log(`hello js user , ${this.name}`);
}
console.log(JsUser.greetingsTwo());




