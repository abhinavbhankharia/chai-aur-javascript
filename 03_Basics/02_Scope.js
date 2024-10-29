
if (true) {
    let a = 10
    const b = 20
    var c = 30

}

//console.log(a);     //throws error as a is declared inside if statement
//console.log(b);     //throws error as b is declared inside if statement
console.log(c);     //does not throw any error as c is declared as var, var has issue with global scope and local scope

function one(){
    const username = "abhinav"
    function two(){
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);     throws error as website is being accessed out of the scope
    two()
}
one()

if (true) {
    const username = "abhinav"
    if (username==="abhinav") {
        const website = "youtube"
        console.log(username+website);   
    }
}

//++++++++++++++Intersesting++++++++++

addone(5)                       //you can execute the function before it is declared
function addone(num){           //basic function
    return num+1
}

addone(5)


addtwo(5)                       //here you cannot execute before funtion is declared. this is beacuse function is declared and stored in a variable
const addtwo = function(num){   //this is also a function but also refered to as experesion
    return num+2
}

addtwo(5)
