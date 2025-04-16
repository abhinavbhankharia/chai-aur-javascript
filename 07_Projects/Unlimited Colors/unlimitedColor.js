const hex = "0123456789ABCDEF"

const change = function(){
    let hexcolor = "#"
    for (let i = 0; i < 6; i++) {
        const indx = Math.floor(Math.random()*16)
        hexcolor+=hex[indx]
    }
    console.log(hexcolor)
    return hexcolor
}

let colorChange

document.querySelector('#start').addEventListener('click', function(){
    if (!colorChange){
        colorChange = setInterval(bgchange,1000)
    }

    function bgchange(){
    document.body.style.backgroundColor=change()
    }
})

document.querySelector('#stop').addEventListener('click', function(){
    clearInterval(colorChange)
    colorChange = null
})

document.querySelector('#reset').addEventListener('click', function(){
    clearInterval(colorChange)
    const head = document.querySelector('.head1')
    const body = head.parentElement
    body.style.backgroundColor= '#212121'
})




