const accountID = 123453
let accountEmail = "abhinav@gmail.com"
var accountPassword = "123456"
accountCity = "Jaipur" //unsafe method to resrve memory withour declaring let or const
let accountState       //variable is declared with no value, then it is considered as not defined

// accountId = 2 changing const values not allowed

accountEmail = "bunty@gamil.com"
accountPassword = "jidied"
accountCity = "mumbai"


console.table([accountID,accountEmail,accountPassword,accountCity, accountState]);


/*
Prefer not to use var 
beacuase of issue in block scope and functional scope
*/