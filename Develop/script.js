// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbers = ["0123456789"];
var lowerCase = ["abcdefghijklmnopqrstuvwxyz"];
var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var symbols = ["!@#$%^&*"];  



function generatePassword() {
  var password = "";
  var passwordText = "";
 // Prompt user to select how many characters they would like in their password and tells them if they're choice does not meet criteria
  var passwordLength = prompt("How many characters would you like to have in your password? Choose a number between 8 and 128.")
    if (passwordLength < 8) {
      alert("Password must contain at least 8 characters")
      return '';
    } 
    if (passwordLength > 128) {
      alert("Password cannot contain more than 128 characters")
      return '';
    }
// Ask user if they would like to include lowercase letters
  var passwordLowerCaseChoice = confirm("Would you like to include lowercase letters in your password?");
    if (passwordLowerCaseChoice) {
      passwordText += lowerCase;
    } 
// Ask user if they would like to include uppercase letters
    var passwordUpperCaseChoice = confirm("Would you like to include uppercase letters in your password?");
      if (passwordUpperCaseChoice) {
        passwordText += upperCase;
      }
// Ask user if they would like to include numbers
    var passwordNumberChoice = confirm("Would you like to include numbers in your password?");
      if (passwordNumberChoice) {
        passwordText += numbers;
      }
// Ask user if they would like to include symbols 
    var passwordSymbolChoice = confirm("Would you like to include symbols in your password?");
      if (passwordSymbolChoice) {
        passwordText += symbols;
      }
  for (let i = 0; i < passwordLength; i++) {
    password += passwordText[Math.floor(Math.random()*passwordText.length)]
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
