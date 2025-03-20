const form = document.querySelector('form');
//const height = parseInt(document.querySelector('#height').value)
//this gives empty vales as the value is not yet entered by the user
//we need to get the value of the input field when the form is submitted, 

form.addEventListener('submit', function(event){
    event.preventDefault()      // Prevents the default action of the form submission

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if(height == ' ' || height<0 || isNaN(height)){
        results.innerHTML = `Please enter valid height ${height}`
    }
    else if (weight == ' ' || weight<0 || isNaN(weight)){
        results.innerHTML = `Please enter valid height ${weight}`
    }
    else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2)
        results.innerHTML = `<span>${bmi}</span>`
    }
})