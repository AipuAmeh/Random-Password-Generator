// Assignment Code
var generateBtn = document.querySelector("generate");
var btn = document.getElementById("generate");
// Write password to the #password input

//Computer Options
var typeA = ["A", "B",  "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N"]
var typeB = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n" ]
var typeC = []
var typeD = []

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}



function criteria() {
  var choice1 = window.confirm("Do you want lower case letters?");
  var chocie2 = window.confirm("Do you want upper case letters?");
  var choice3 = window.confirm("Do you want numeric characters?");
  var choice4 = window.confirm("Do you want special characters?");
  document.getElementById("generate").onclick = function() {criteria};

}










// Add event listener to generate button
btn.addEventListener("click", criteria)
generateBtn.addEventListener("click", writePassword)
