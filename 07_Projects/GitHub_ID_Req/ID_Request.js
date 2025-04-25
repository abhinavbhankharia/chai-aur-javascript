const form = document.querySelector('form');

form.addEventListener('submit', function(event){
    event.preventDefault()      // Prevents the default action of the form submission

    const userDetails = document.getElementById('User Details')
    let userID = document.querySelector('#username').value
    const requestUrl = `https://api.github.com/users/${userID}`
    
    const xhr = new XMLHttpRequest (); //creating object for reference
    xhr.open('GET',requestUrl)  //open doesnt get called on its own
    xhr.onreadystatechange = function () {   //onreadystatechange tracks the state change at every step
        if (xhr.readyState==4) {
        const data = JSON.parse(this.responseText)  //here string gets converted to JSON format
            if(data.status != "404"){
                userID = ""
                //display User profile image
                userDetails.querySelector("img").src = data.avatar_url;

                //display name and followers
                userDetails.querySelector("h2").textContent = `User Found.`
                userDetails.querySelector("h3:nth-of-type(1)").textContent = `Name: ${data.name}`;
                userDetails.querySelector("h3:nth-of-type(2)").textContent = `Followers: ${data.followers}`;
            }
            else
            {
                userID = ""
                userDetails.querySelector("img").src = 'none';
                userDetails.querySelector("h2").textContent = `User Not Found. Please Enter valid Username`;
                userDetails.querySelector("h3:nth-of-type(1)").textContent = ``;
                userDetails.querySelector("h3:nth-of-type(2)").textContent = ``;
            }
        }
    }
    xhr.send()

})

