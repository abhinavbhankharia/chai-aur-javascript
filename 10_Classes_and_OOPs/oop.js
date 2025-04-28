//Object literal
const user = {
    username :"abhinav",
    loginCount : 10,
    signedIn : true,

    getUserDetails: function(){
        console.log("got user details from database");
        console.log(`username: ${this.username}`)       //this is used to refer to the current context 
        console.log(this);
        
    }
}

console.log(user.loginCount);
console.log(user.getUserDetails());
console.log(this);          //this returns empty brackets here but in browers it returns many attributes

// new keyword is s constructor function which allows you to create multiple instance from a single object literal
//in short new keyword is used to create new context, hence called as constructor function
// const promiseOne = new Promise()
// const date = new Date()

function User(username, loginCount, isLoggedIn){
    this.username = username
    //varaible = value passed in function 
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`welcome ${this.username}`);
        
    }
    
    return this         //this is implicitly defined and no need to return it
}

const UserOne = User("abhinav", 12,true)
const UserTwo = User("hello", 11,false)
console.log(UserOne);
console.log(UserTwo);           //UserTwo values overrides the UserOne value and gives the same output for both variables

//above issue can be avoided by using new keyword
const UserThree = new User("bunty", 2,true) 
const UserFour = new User("world", 1,false)
console.log(UserThree);
console.log(UserFour);  

console.log(UserThree.constructor);

