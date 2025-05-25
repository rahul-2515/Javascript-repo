const accountId = 12345
let accountEmail = "rahulyadav416516@gmail.com"
var accountPassword = "54321"
accountCity = "jaipur"

// accountId = 44556  //error due to not allowed to update the const var in javascript.
console.log(accountId)

accountEmail = "xyz@gmail.com"
accountPassword = "889988"
accountCity = "Udaipur"

console.table([accountId,accountEmail,accountPassword,accountCity])

/* try not use the var datatype 
because of issue of block scope and functional scope*/