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
  
  let potentials = []

  let length = parseInt(prompt("What is the password length?"))
  if (length < 8 || length > 128){
    alert("Invalid input, please pick a number greater than 8 and less 128. Please refresh the page!")
  }
    else {    
    
    // validated that user selects >8, less 128 characters in length.
    let lCharsTrue = confirm("Will you chose large characters?")
    let sCharsTrue = confirm("Will you chose small characters?")
    let numsTrue = confirm("Will you chose numbers?")
    let emojisTrue = confirm("Will you chose emojis?")
    // Did not place confirm for numsTrue and emojis true, so I had to clone from github and start over 
    

    if (lCharsTrue) { potentials.push(lChars)}
    if (sCharsTrue) { potentials.push(sChars)}
    if (numsTrue) { potentials.push(nums)}
    if (emojisTrue) { potentials.push(emojis)}

    console.log(sCharsTrue, numsTrue, lCharsTrue, emojisTrue)

    // ran a console log for confirm for pw preference and selected emojis and sChars as true; lChars and nums as flase. confirmed per console.log--sending to github
    }  
    
    
   


    





  var generateBtn = document.querySelector("#generate");
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
  