// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbers = ["0123456789"];
var lowerCase = ["abcdefghijklmnopqrstuvwxyz"];
var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var symbols = ["!@#$%^&*"];  

function generatePassword() {
// Password and passwordText variables are left undefined so that they can be given values from executing function
  var password = "";
  var passwordText = "";
 // Prompt user to select how many characters they would like in their password and tells them if their choice does not meet criteria
  var passwordLength = prompt("How many characters would you like to have in your password? Choose a number between 8 and 128.")
    if (passwordLength < 8) {
      alert("Password must contain at least 8 characters")
      return "";
    } 
    if (passwordLength > 128) {
      alert("Password cannot contain more than 128 characters")
      return "";
    }
// Ask user if they would like to include lowercase letters
// If user chooses yes, lowerCase values are added to passwordText
  var passwordLowerCaseChoice = confirm("Would you like to include lowercase letters in your password?");
    if (passwordLowerCaseChoice) {
      passwordText += lowerCase;
    } 
// Ask user if they would like to include uppercase letters
// If user chooses yes, upperCase values are added to passwordText
    var passwordUpperCaseChoice = confirm("Would you like to include uppercase letters in your password?");
      if (passwordUpperCaseChoice) {
        passwordText += upperCase;
      }
// Ask user if they would like to include numbers
// If user chooses yes, numbers are added to passwordText
    var passwordNumberChoice = confirm("Would you like to include numbers in your password?");
      if (passwordNumberChoice) {
        passwordText += numbers;
      }
// Ask user if they would like to include symbols
// If usere chooses yes, symbols are added to passwordText
    var passwordSymbolChoice = confirm("Would you like to include symbols in your password?");
      if (passwordSymbolChoice) {
        passwordText += symbols;
      }
// Execute for loop 
  for (let i = 0; i < passwordLength; i++) {
    password += passwordText[Math.floor(Math.random()*passwordText.length)]
  }
// Add return statement to return password value 
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
