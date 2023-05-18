// Assignment code here
// Create array variables for each set of characters

// Create Master Array - holds lower if chosen; upper if chosen; etc.





// Create confirm methods instead of prompts
// confirms return a boolean value, i.e. true or false
// prompts allow for more varied user input
// check if what user gives is number
//create vars: wantsUpper; wantsLower; wantsNumber; wantsSpecial those will hold
//  responses from confirm statements 
//  if wantsUpper is true, then add upperCase to master array



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


console.log(generateBtn);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  // declare a variable called ranPassword
  var ranPassword = "";

  // then you prompt the user for the password length they desire
  // then confirm if they want uppercase letters
  // then confirm for lowercase letters
  // and so on

  // you will return the randomly generated password
  // which you will have created in the lines of code
  // above this one
return 100
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
