class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`username is ${this.username}`);
    }
    static createID(){      //if you want to restrict the usage of the function then use keyword STATIC
        return `123`
    }
}

const abhinav = new User("abhinav")
//console.log(abhinav.createID());

class Teacher extends User{
    constructor(email, username){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("abh@jabd.com", "iphone")

iphone.logMe();
//console.log(iphone.createID());       createID not accessible

