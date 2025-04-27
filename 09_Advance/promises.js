const promiseOne = new Promise(function(resolve,reject){
    //Do an async task
    //Do DB calls, cryptography,network
    setTimeout(function(){
        console.log("sync task is complete");
        resolve()
    } ,1000);
})

//then() has direct relation with resolve
//then() consists of a callback function which automatically returns the value of promise
promiseOne.then(function(){
    console.log("promise consumed");
    
})     

//Promise2
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("async 2 resolved");
})

//Promise3
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"abhinav",email:"abhinavbhankharia@gmail.com"})
    },1000)
})
promiseThree.then(function(user){
    console.log(user)
})

//Promise4
const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:'abhinav', password:'123'})
        }
        else{
            reject('ERROR: Something went wrong!')
        }
    },1000)
})

promiseFour
.then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(()=> console.log("the promise is either resolved or rejected")
)

//promise5

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:'javascript', password:'123'})
        }
        else{
            reject('ERROR: JS went wrong!')
        }
    },1000)
})

//async waits till the task is executed, else thorws an error. cannot handle catch() gracefully
async function consumePromiseFive() {
    try {
        const response = await promiseFive          //we use try and catch to handle error
    console.log(response);
    } catch (error) {
        console.log(error);   
    }
}
consumePromiseFive()


// async function getAllUsers(params) {
//     try {
//         const response = await fetch('https://api.github.com/users/abhinavbhankharia')
//     const data = await response.json()      //you need to wait for the response to get converted
//     console.log(data);
//     } catch (error) {
//         console.log("error:", error);
//     } 
// }
// getAllUsers()

fetch('https://api.github.com/users/abhinavbhankharia')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error) => {
    console.log("ERROR:",error);
})