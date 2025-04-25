const requestUrl = 'https://api.github.com/users/abhinavbhankharia'
const xhr = new XMLHttpRequest (); //creating object for reference
xhr.open('GET',requestUrl)  //open doesnt get called on its own

xhr.onreadystatechange = function () {   //onreadystatechange tracks the state change at every step
    console.log(xhr.readyState);
    if (xhr.readyState==4) {
        console.log(this.responseText);
        console.log(typeof data);   //response from url is mostly as String type
        const data = JSON.parse(this.responseText)  //here string gets converted to JSON format
        console.log(data.follower);
        
    }
}

xhr.send()                  //we use send() to call open()
