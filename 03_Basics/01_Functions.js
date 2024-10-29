
function sayMyName(){
    console.log("A");
    console.log("B");
    console.log("H");
    console.log("I");
    console.log("N");
    console.log("A");
    console.log("V");

}

// sayMyName           //refernece of function
// sayMyName()         //execution of the function 


// function AddTwoNum(num1,num2){              //num1 and num2 are parameters
//     console.log(num1+num2);                 //this function does not return any value, hence it will gives error while excution
    
// }

function AddTwoNum(num1,num2){              
    // const result = num1+ num2
    // return result    
    return num1+num2
    console.log("abhinav");                 //this will never get executed as it is written after return statement
              
}
AddTwoNum(3,5)                              //3 and 5 are arguments 
// AddTwoNum(3,'5')
// AddTwoNum('3',5)
// AddTwoNum(3,'a')
// AddTwoNum(3,null)
// AddTwoNum(3,undefined)
const result = AddTwoNum(6,3)
console.log(`sum of two numbers is ${result}`);


function loginUsernMessage(username = 'sam'){     // you can specify a default value to avoid cases of passing no values, if value is passed then deafault value gets override      
    if(!username)                         //username===undefined
    {
        console.log("please enter username");
        return 
        
    }
    return `${username} just logged in `
}

console.log(loginUsernMessage('abhinav'));
console.log(loginUsernMessage());           //if no value is passed then it shows undefined


function calculateCartPrice(...num1){       //using rest operator, this stores all the multiple values passed to a function
    return num1
}
console.log(calculateCartPrice(2));
console.log(calculateCartPrice(400,100,300));

const user = {
    username: "abhinav",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
handleObject(user)
handleObject(               //passing object into a function
    {
        username: "sam",
        price:399
    }
)

const myNewArray = [200,400,600,140]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([300,243,600,122]));      //passing array directly into a function


