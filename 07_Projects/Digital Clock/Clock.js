const clock = document.getElementById('clock')

//const clock = document.querySelector('#clock')


//to referesh time every second we use setInterval function
//setInterval method is used to controls events
//setInterval(function, milliseconds)
setInterval(function (){
    let date = new Date()
    //console.log(date.toLocaleTimeString())
    clock.innerHTML = date.toLocaleTimeString()
} , 500);