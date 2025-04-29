class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email,password){
        super(username)         //super keyword automatically takes the reference of the class that is being extended
        this.email = email
        this.password = password
    }
    addCourses(){
        console.log(`a new course was added by ${this.username}`);   
    }
}
const chai = new Teacher("chai","chai@google.com","123")
chai.addCourses()
chai.logMe()

const masalaChai = new User("abhinav")
masalaChai.logMe()

console.log(chai === Teacher);
console.log(chai instanceof Teacher);
console.log(chai instanceof User);
