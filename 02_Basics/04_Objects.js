//const tinderuser = new Object()

const tinderuser = {}

tinderuser.id = "1234abc"
tinderuser.name = "sammy"
tinderuser.isLoggedIn = false

console.log(tinderuser);

console.log(Object.keys(tinderuser));       //this returns array of all keys of the object
console.log(Object.values(tinderuser));     //this returns array of all values of the object
console.log(Object.entries(tinderuser));    //this returns array of key-value pairs as smaller arrays

console.log(tinderuser.hasOwnProperty('isLoggedIn'));
console.log(tinderuser.hasOwnProperty('isLogged'));

const regularUser = {
    email : "abhinav@gmail.com",
    fullname : {
        userfullname:{
            firstname:"abhinav",
            lastname:"bhankharia"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);       
//in case of API calls, some values may not be present. Hence you use fullname? to avoid error, uses the values only if they are available


const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}

//const obj3 = {obj1, obj2}       this makes the objects as the element and not their individual key-value pair
//const obj3 = Object.assign(obj1,obj2)   //object.assign(target, source), here obj1 is target
const obj3 = Object.assign({},obj1,obj2)  //hence empty brackets are recommended
console.log(obj3);

const obj4 = {...obj1,...obj2}              //most commonly used
console.log(obj3);



const course = {
    coursename:"js in hindi",
    price: "999",
    courseInstructor:"Hitesh"
}

//const {courseInstructor} = course
const {courseInstructor : instructor} = course      //desturcturing in objects
console.log(instructor);                            //no need to call course.courseInstructor everytime.


// {                                                //API data in JSON format
//     "name": "abhinav",
//     "coursename": "js in hindi",
//     "price": "free"
// }