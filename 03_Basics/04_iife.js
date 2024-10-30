// immediately invoked function expressions IIFE

//these functions get executed as soon as the application gets started and also to avoid global scope pollution

(function chai(){                   //this is a named iife, name=chai
    console.log("DB connected");
    
})();                       //semicolon must be used to end the iteration, else error is thrown


// (function definition)(execution call);


( () => {                   //arrow function can also be defined as a iife
    console.log("DB connected");
    
} )();  


( (name) => {                   //passing parameter to iife function //this is a unnamed iife as it has no function name
    console.log(`DB connected ${name}`);
    
} )("abhinav"); 