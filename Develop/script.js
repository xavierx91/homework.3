// Assignment Code
var textArea = document.getElementById('password')
var generateBtn = document.querySelector("#generate");
var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numericArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialCharacterArray = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
var passwordRequirements = []
var passWord = ''
var lenghtOfPassword
var lowerCase
var upperCase
var numeric
var specialCharacter




function getUserInput() {
  lenghtOfPassword = prompt("how long do you want it to be?");
  lowerCase = confirm("is it lower case?");
  upperCase = confirm("is it Upper case?");
  numeric = confirm("is it numeric?");
  specialCharacter = confirm("is it a special character?");
}

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");
  getUserInput();
  // passwordText.value = password;
  if (lenghtOfPassword < 8 || lenghtOfPassword > 128) {
    alert("Password lenght is not valid")
  }
  console.log(lenghtOfPassword)
  if (lowerCase) {
    passwordRequirements = passwordRequirements.concat(lowerCaseArray);
    console.log(lowerCase);
  }
  if (upperCase) {
    passwordRequirements = passwordRequirements.concat(upperCaseArray);
    console.log(upperCase);
  }
  if (numeric) {
    passwordRequirements = passwordRequirements.concat(numericArray);
    console.log(numeric);
  }
  if (specialCharacter) {
    passwordRequirements = passwordRequirements.concat(specialCharacterArray);
    console.log(specialCharacter);
  }
  console.log(passwordRequirements);
  for (let i = 0; i < parseInt(lenghtOfPassword); i++) {
    var char = Math.floor(Math.random() * passwordRequirements.length);
    passWord += passwordRequirements[char]

    console.log(passWord)
  }

  textArea.textContent = passWord

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
