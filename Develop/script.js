// Assignment Code
var generateBtn = document.querySelector("generate");
var btn = document.getElementById("generate");
// Write password to the #password input

// Computer Options
var upperCase = ["A", "B",  "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n" ];
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var characters = ["!", "#", "$", "&", "/", "?", "+", "@"];


// Prompt of criteria questions
  function criteria() {
    var choice1 = window.confirm("Do you want lower case letters?");
    var choice2 = window.confirm("Do you want upper case letters?");
    var choice3 = window.confirm("Do you want numeric characters?");
    var choice4 = window.confirm("Do you want special characters?");
    var choice5 = window.prompt("How long do you want your password to be? \n Password must have max length of 12 characters and mini.");
    document.getElementById("generate").onclick = function() {criteria};

// Cancels that option 
    if (!choice1, !choice2, !choice3, !choice4) {
      return;
    }
// Allows user to choose password length between 1-12
    if (choice5 < 12) {
      generatePassword();
    }


  }

  function generatePassword() {
    var code = upperCase.concat(lowerCase, num, characters);
    var value = Math.floor(Math.random() * code.length);
    var computer = code[value];

    if ( password < 12) {
      computer();
      windows.confirm("This is your password!")
     }


   }
  
 

  //
function writePassword() {

 

  var password = generatePassword();
  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  document.querySelector("generate").confirm = function() {writePassword};

}

writePassword();









// Add event listener to generate button
btn.addEventListener("click", criteria)
generateBtn.addEventListener("click", writePassword)
