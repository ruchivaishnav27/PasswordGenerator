// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add all probable characters in an array
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerCases = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCases = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
var choices = [];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Write code to generate password
function generatePassword() {
  while (true) {
    var passwordLength = prompt("Enter number of characters you would like.");
    if (!passwordLength) {
    alert("Please enter a number");
  } else if (passwordLength < 8 || passwordLength > 20) {
    prompt("Password must be between 8 to 20 characters");
  } else {
    break;
    }
  }

if (confirm("Do you want to include any numbers?")) {
  choices = choices.concat(number);
}
if (confirm("How about any lowercase letters?")) {
  choices = choices.concat(lowerCases);
}
if (confirm("Any uppercase letters?")) {
  choices = choices.concat(upperCases);
}
if (confirm("What about special characters?")) {
  choices = choices.concat(specialCharacters);
}
if (choices.length == 0) {
  alert("Please complete the criteria to generate a random password");
}

// Generate password
var randomPassword = [];
for (var i = 0; i < passwordLength; i++) {
  var allChoices = choices[Math.floor(Math.random() * choices.length)];
  randomPassword.push(allChoices);
}
  return randomPassword.join("");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);