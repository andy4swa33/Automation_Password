// Assignment Code

// ***Below pseudocodes is an outline of the steps to password....
  
  // How long to you want your password
  // Select which characters you would like to use
  //Select random characters to add to password
  // Return this randomly generated password. 


  let sChars = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  let emojis = ["😉", "😜", "🤔", "😒", "😃"] 
  
  let lChars = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
  
  let length = parseInt(prompt("What is the password length?"))
  
  console.log(typeof length, length)

  if (length < 8 || length > 128){
    alert("Invalid input, please pick a number greater than 8 and less 128. Please refresh the page!")
  }
    else {
    console.log("continue") 
    }
    // validated that user selects >8, less 128 characters in length.
    let chars






  var generateBtn = document.querySelector("#generate");
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
  