const buttons = document.querySelectorAll('.button')

const body = document.querySelector('body')

buttons.forEach(function(button) {
    button.addEventListener('click', function(ColorEvent){
        console.log(ColorEvent);
        console.log(ColorEvent.target); //provides the element where event originated
        if(ColorEvent.target.id=='grey'){
            body.style.backgroundColor = ColorEvent.target.id
        }
        if(ColorEvent.target.id=='white'){
            body.style.backgroundColor = ColorEvent.target.id
        }
        if(ColorEvent.target.id=='blue'){
            body.style.backgroundColor = ColorEvent.target.id
        }
        if(ColorEvent.target.id=='yellow'){
            body.style.backgroundColor = ColorEvent.target.id
        }
    } )
})