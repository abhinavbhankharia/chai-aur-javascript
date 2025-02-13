
let index = 0
while (index<=10) {
    console.log(`value of i is: ${index}`)
    index= index + 2
}

let myArray = ["flash", "arrow", "superman", "batman", "wonderwoman"]   
let arr = 0
while (arr<myArray.length) {
    console.log(myArray[arr]);
    arr++;

}

let score = 11
do{
    console.log(`Score is ${score}`)       //this will execute at least once
    score++
} while(score<=10); //semicolon is mandatory
