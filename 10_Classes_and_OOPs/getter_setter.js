class User{
    constructor(email, password){
        this.email = email
        this.password = password
    }
    get email(){
        return this._email.toUpperCase()        //getters always return
    }
    set email(value){
        return this._email = value              //setters never return as the set value
    }   
    get password(){
        return `${this._password}abhi`
    }
    set password(value){
        this._password = value
    }
}

const abhinav = new User('abhi@gmail.com', 'gesc')
console.log(abhinav.password)
console.log(abhinav.email)
