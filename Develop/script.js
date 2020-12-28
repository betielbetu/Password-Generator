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
  var includeLowerCase = confirm("do you want to use lowercase?");
  var lowercase="abcdefghijklmnopqrstuvwxyz";
  while (length > 0) {
    if (includeLowerCase === true) {
      var c = Math.floor(Math.random()*lowercase.length+1);
      pass+=lowercase.charAt(c);
    }
   
    length--;
  }
  return pass;

}
  // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
