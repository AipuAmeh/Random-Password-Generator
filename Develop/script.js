// Assignment Code

var textArea = document.getElementById("password");
var btn = document.getElementById("generate");
// Write password to the #password input

// Computer Options
var upperCase = ["A", "B",  "C", "D", "E", "F", "G", "H"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h"];
var num = [1, 2, 3, 4, 5, 6, 7, 8];
var characters = ["!", "#", "$", "&", "/", "?", "+", "@"];
var possibleCharacters = [];
var newPassword = "";
var passwordLength = 0;


// Prompt of criteria questions
  function criteria() {
    // Asks user how long password needs to be
    // Checks if password is less than 8, return if not
    // Checks if password is greater than 128, return if not
    var choice5 = window.prompt("How long do you want your password to be? \n Password must be at least 8 characters and no more than 128 characters");
    if (choice5 < 8 || choice5 > 128) {
      return;
    } 
    passwordLength = choice5;

    var choice1 = window.confirm("Do you want lower case letters?");
    var choice2 = window.confirm("Do you want upper case letters?");
    var choice3 = window.confirm("Do you want numeric characters?");
    var choice4 = window.confirm("Do you want special characters?");
   
  

// If user does not click any options return 
    if (!choice1 && !choice2 && !choice3 && !choice4) {
      return;
    }


    if (choice1) {
      possibleCharacters= possibleCharacters.concat(lowerCase)
    }
    if (choice2) {
      possibleCharacters = possibleCharacters.concat(upperCase)
    }
    if (choice3) {
      possibleCharacters = possibleCharacters.concat(num)
    }
    if (choice4) {
      possibleCharacters = possibleCharacters.concat(characters)
    } 
    var passwordOptions = {
      passwordLength: passwordLength, 
      possibleCharacters: possibleCharacters,
    };
    return passwordOptions;
    //return possible characters

  }

function generatePassword() {

  var passwordOptions = criteria();
    var finalPassword = [];
// Criteria function is going to return array of all possible characters
  
  
    if (!passwordOptions) {
      return "Please try again";
    }
 
    console.log(passwordOptions); // Prints password array to console
   
// Loop that uses users choice of length as a stopping point and loops through choices to 
// randomly choose an index
   for (i = 0; i < passwordOptions.passwordLength; i++) {
      var randomIndex = Math.floor(Math.random() * passwordOptions.possibleCharacters.length);
      var randomChar = passwordOptions.possibleCharacters[randomIndex];
      finalPassword.push(randomChar);
  
    }
    console.log(finalPassword);
  
    return finalPassword;

    }

// Starter code prints password to text area at the id #password
  function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password.join("");


}



btn.addEventListener("click", writePassword);


