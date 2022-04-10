// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbers = "0123456789";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var symbols = "!@#$%^&*";  

function generatePassword() {
 // Prompts user to select how many characters they would like in their password and tells them if they're choice does not meet criteria
  var passwordLengthUser = prompt("How many characters would you like to have in your password? Choose a number between 8 and 128.")
    if (passwordLengthUser < 8) {
      alert("Password must contain at least 8 characters")
      return '';
    } 
    if (passwordLengthUser > 128) {
      alert("Password cannot contain more than 128 characters")
      return '';
    }

  var password


}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
