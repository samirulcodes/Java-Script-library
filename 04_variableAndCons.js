const accountId = 23145
let accountEmail = "samislam@.com"
var accountPassword = "212345"
accountCity = "Kolkata"
let accountState; // it will print undefined, no value assign


// accountId=42163  // not allowed because , constant variable

/*
prefer not to use var
because of issue in block scope and functionl scope
*/

accountEmail = "samislam12@.com"
accountPassword = "21432"
accountCity = "delhi"

// console.log(accountEmail);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]) 