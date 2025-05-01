// function makeFunc() {
//     const name = "Mozilla";
//     function displayName(){
//         console.log(name);
//     }
//     return displayName;         //inner function as well as outer function leexical scope is returned
// }
//const myFunc = makeFunc(); 
//myFunc();

// document.getElementById("orange").onclick = function(){
//     document.body.style.backgroundColor = `orange`
// }
// document.getElementById("green").onclick = function(){
//     document.body.style.backgroundColor = `green`
// }

function colorchange(color){
    //document.body.style.backgroundColor = `${color}`
    //onclick requires a function as return type
    return function(){
    document.body.style.backgroundColor = `${color}`
}
}

document.getElementById('orange').onclick = colorchange("orange")   //we are executing the function here, but 
// onclick requires function as return type, hence we will change the function defination so that it returns a function
document.getElementById('green').onclick = colorchange("green")
