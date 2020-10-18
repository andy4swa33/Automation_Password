// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword() {
  // How long to you want your password
  // Select which characters you would like to use
  //Select random characters to add to password
  // Return this randomly generated password
  
var SpecialChar = [ ""]

} 
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
