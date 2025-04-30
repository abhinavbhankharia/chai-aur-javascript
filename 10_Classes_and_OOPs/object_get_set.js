const User = {
    _email:'abhi@gmail.com',
    _password:'abhi123',

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    },

    get password(){
        return this._password.toLowerCase()
    },

    set password(value){
        this._password = value
    }
}

const tea = Object.create(User)

console.log(tea.email)

//no such email property exist in object but as we have used getter and setter function it overrides the 
// properties with a special method hence we can access email