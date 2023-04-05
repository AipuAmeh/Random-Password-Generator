// Assignment Code
// var generateBtn = document.querySelector("password");
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


// Prompt of criteria questions
  function criteria() {
    //Ask user how long password needs to be
    //Check if password is less than 8, return if not
    //Check if password is greater than 128, return if not
    var choice1 = window.confirm("Do you want lower case letters?");
    var choice2 = window.confirm("Do you want upper case letters?");
    var choice3 = window.confirm("Do you want numeric characters?");
    var choice4 = window.confirm("Do you want special characters?");
    // document.getElementById("generate").onclick = function() {criteria};

// Cancels that option 
    if (!choice1 && !choice2 && !choice3 && !choice4) {
      return;
    }
// If any of 5 choices are confirmed, call the function generate password


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
    return possibleCharacters;
  
    //return possible characters

  }

function generatePassword() {

    var finalPassword = [];
  //Criteria is going to return array of all possible characters
    var userCharChoices = criteria();
    if (!userCharChoices) {
      return "Please try again";
    }
    var passLength = promptLength();
    if (!passLength) {
      return "Please try again"
    }
    console.log(userCharChoices);
    // var code = upperCase.concat(lowerCase, num, characters);
    //Using users choice of length as stopping point, loop through userCharChoices 
    //and randomly choose an index
    var randomIndex = Math.floor(Math.random() * userCharChoices.length);
    var randomChar = userCharChoices[randomIndex];
    var count =0;
    
   while(userCharChoices < userCharChoices.length) {
    finalPassword.push(randomChar);
    return finalPassword.join("");
   }
      
   
  }
  
  //
  function writePassword() {
  textArea.value = generatePassword();


//  document.getElementById("password").addEventListener("click", writePassword);
  // = function() {writePassword};
}

function promptLength() {
  var choice5 = window.prompt("How long do you want your password to be? \n Password must be at least 8 characters and no more than 128 characters");
  if (choice5 < 8 || choice5 > 128) {
    return;
  } 
  return choice5;
}


// if (=== computer) {
//   (writePassword(password) === computer)
// }

// Add event listener to generate button

btn.addEventListener("click", writePassword);


