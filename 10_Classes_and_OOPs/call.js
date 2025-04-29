function setUsername(username){
    //complex DB calls
    this.username = username
    console.log("username created");
}

function createUsername(username,email,password){
    // setUsername(username)  here setUsername is not called and only reference is given
    // to call the function explicitly we use .call method
    //.call method holds the reference and avoids deletion of execution context 

    setUsername.call(this, username)    //here we allso pass current context 'this' so that the method 
    //excetues and stores the values in the current context and avoid data loss during EC deletion
    this.email = email
    this.password = password

}

const chai = new createUsername("chai","chai@google.com","123")
console.log(chai);
