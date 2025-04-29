let myName = "abhinav     "

console.log(myName.length);


let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`spidey power is ${this.spiderman}`);
    }
}

Object.prototype.abhinav = function(){
    console.log(`abhinav is present in all objects`);
}

Array.prototype.chai = function(){
    console.log(`chai is preesent in array`);
    
}

heroPower.abhinav() //both object and array have access to abhinav() as it is defined at higher level i.e. Object prototype
myHeros.abhinav()

myHeros.chai()
//heroPower.chai()      object does not have access to chai because chai() is defined only to Arrays



//inheritance

const user = {
    name : 'chai',
    email: 'chai@google.com'
}

const teacher = {
    makeVideo : true
}

const teachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment : 'JS assignment',
    fullTime : true,
    __proto__: teachingSupport //this givess access to teachingSupport properties
}

teacher.__proto__ = user       //another way of using proto

//modern syntax for setting a protoype

Object.setPrototypeOf(teachingSupport, teacher) //access of teacher properties to teachingSupport

let anotherUsername = "ChaiAurCode    "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`true length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"abhinav  ".trueLength()