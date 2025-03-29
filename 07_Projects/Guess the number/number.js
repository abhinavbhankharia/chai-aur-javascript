let randomNumber = parseInt(Math.random() * 100 + 1);
console.log(randomNumber) //random number between 1 and 100
const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = [] //values enetered by the user are stored here, user cant enter the same value again
let numGuess = 1    //number of guesses user has made

let playGame = true //checks condition to allow user to play the game 

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess)
        validateGuess(guess)
    });
}       //checks if user allowed to play the game, then takes the value and calls for validation

function validateGuess(guess){
    //check if the input is a number
    if(isNaN(guess)){
    alert(`Please enter a valid number`)}
    else if(guess < 1){
    alert(`Please enter a number greater than 0`)}
    else if(guess > 100){
    alert(`Please enter a number less than 100`)}
    else{
        prevGuess.push(guess) //push the value to the array
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`!!!Game Over!!!  Random number was ${randomNumber}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    //check if input is higher or lower and display the message
    if(guess === randomNumber){
        displayMessage(`!!!Congratulations!!! You got it right in ${numGuess-1} guesses`)
        endGame()
    } else if(guess < randomNumber){
        displayMessage(`Last guess was too low`)
    }else if(guess > randomNumber){
        displayMessage(`Last guess was too high`) 
    }
} 

function displayGuess(guess){
    //clears the input values and updates the guess array
    userInput.value = ''    //clears the input field and replaces it with an empty string
    guessSlot.innerHTML += `${guess}, `   //pushes the value to the guess array
    numGuess++ //increments the number of guesses
    remaining.innerHTML = `${11 - numGuess}` //updates the number of guesses left

}

function displayMessage(message){
    //display the message to the user
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    //end the game
    userInput.value = '' //resets the value 
    userInput.setAttribute('disabled','') //disables the input field
    p.classList.add('button')
    p.innerHTML = `<h2 id="newgame">Start new game</h2>`
    startOver.appendChild(p) //adds the new game button to the DOM
    playGame = false //sets the condition to false
    newGame() //calls the new game function
}

function newGame(){
    //starts a new game
    document.querySelector('#newgame').addEventListener('click', function(event){
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [] //clears the previous guesses
        numGuess = 1 //resets the number of guesses
        guessSlot.innerHTML = '' //clears the guess array
        remaining.innerHTML = `${11 - numGuess}` //resets the number of guesses left
        userInput.removeAttribute('disabled') //enables the input field
        startOver.removeChild(p) //removes the new game button from the DOM
        playgame= true //sets the condition to true
    })
}