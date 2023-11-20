// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// * Present a series of prompts for password criteria
//     * Length of password
//       * At least 8 characters but no more than 128.
//     * Character types
//       * Lowercase
//       * Uppercase
//       * Numeric
//       * Special characters ($@%&*, etc)
// * Code should validate for each input and at least one character type should be selected
//   * Once prompts are answered then the password should be generated and displayed in an alert or written to the page

var allCharacters = [];
allCharacters = allCharacters.concat(
  specialCharacters,
  numericCharacters,
  lowerCasedCharacters,
  upperCasedCharacters
);
console.log(allCharacters);

var passwordLength = parseInt(
  prompt("How many characters would you like your password to contain")
);

console.log(passwordLength);
// Function to prompt user for password options
function getPasswordOptions() {
  if (passwordLength < 8) {
    alert("Password length must be at least 8 characters");
    return;
  } else if (passwordLength > 128) {
    alert("Password length must be less then 128 characters");
    return;
  }

  specialCharacters = confirm(
    "Click OK to confirm including special characters."
  );
  numericCharacters = confirm(
    "Click OK to confirm including numeric characters."
  );
  lowerCasedCharacters = confirm(
    "Click OK to confirm including lowercase characters."
  );
  upperCasedCharacters = confirm(
    "Click OK to confirm including uppercase characters"
  );

  if (
    specialCharacters === false &&
    numericCharacters === false &&
    lowerCasedCharacters === false &&
    upperCasedCharacters === false
  ) {
    alert("Your password must contain at least one character types");
  }
}
getPasswordOptions();

// Function to generate password with user input

function generatePassword() {
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var random = Math.floor(Math.random() * allCharacters.length);
    password += allCharacters[random];
  }
  return password;
}
generatePassword();

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
