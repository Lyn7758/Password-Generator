// Assignment code here
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];

var passLength = "" ;
var isLower;
var isUpper;
var isNumber;
var isSpecial;
var randomPassword = "";

function determineCriteria() {
  isLower = confirm("Would you like to have lower case in the password? ");
  isUpper = confirm("Would you like to have upper case in the password?");
  isNumber = confirm("Would you like to have numbers in the password?");
  isSpecial = confirm("would you like to have speical characters in the password?");
  alert("Thanks for the input");
}

function passwordLength(){
  passLength = prompt("How long would you like your password to be? Choose between 8-128 characters: ");
  while(passLength < 8 || passLength > 128) {
    alert("The length of your pasword must be bewteen 8 to 128 characters, please enter again!");
    passwordLength();
    } 
  alert("Thanks for the input");
}

function generatePassword(){
  passwordLength();
  determineCriteria();

  if (isLower  === false && isUpper === false && isNumber === false && isSpecial === false){
    alert("You must choose at least one parameter");
    determineCriteria();
  }
  var password = [];
  if (isLower == true) {
    password = password.concat(lowercase);
  }
  if (isUpper == true) {
    password = password.concat(uppercase);
  }
  if (isNumber == true) {
    password = password.concat(number);
  }
  if (isSpecial == true) {
    password = password.concat(special);
  }
  console.log(password);
  for (var i = 0; i < passLength; i++) {
    randomPassword = randomPassword + password[Math.floor(Math.random() * password.length)];
    console.log(randomPassword);
  }  
  console.log(passLength);
  return randomPassword;
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
document.querySelector("#generate").addEventListener("click", writePassword);

generateBtn.addEventListener("click", writePassword);
