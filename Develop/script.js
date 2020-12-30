// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var pass = ''
  var length = prompt("How long is your password?");
  var includeLowerCase = confirm("would you like to use lowercase?");
  var includeUpperCase = confirm("would you like to use uppercase?");
  var includeNumbers = confirm ("would you like to use numbers?");
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";


  while (!includeUpperCase && !includeLowerCase && !includeNumbers) {
    alert("You must select at least one character type!");
    includeUpperCase = confirm("would you like to use uppercase letters?");
    includeLowerCase = confirm("Would you like to use lowercase letters?");
    includeNumbers = confirm ("would you like to use numbers?")

  }
  while (pass.length<length) {
    if (includeLowerCase && pass.length<length) {
      var c = Math.floor(Math.random() * lowercase.length + 1);
      pass += lowercase.charAt(c); 
    }
    if (includeUpperCase && pass.length<length) {
      var c = Math.floor(Math.random() * uppercase.length + 1);
      pass += uppercase.charAt(c); 
    } 
    if (includeNumbers && pass.length<length) {
      var c = Math.floor(Math.random() * numbers.length + 1);
      pass += numbers.charAt(c); 
    } 

    
  }
  return pass;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
