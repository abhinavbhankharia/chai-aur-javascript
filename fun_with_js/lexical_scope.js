// function init(){
//     let name = "Mozilla";

//      function displayName() {
//         // displayName() is the inner function, that forms the closure
//         console.log(name); // use variable declared in the parent function
//     }
//     displayName();
// }
// init();

function outer(){
    let username = "abhinav"
    //console.log("secret ",mysecret); not accessible to parent function
    function inner(){
        let mysecret = "my123"
        console.log('inner ',username);
    }
    function innerTwo(){
        //console.log("my secret ", mysecret);      not accessible to sibling functions
        console.log("innertwo ", username);
    }
    inner()
    innerTwo()
    
}
outer()
console.log("outer ", username);    //not accessible outside the scope

