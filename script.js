
var generateBtn = document.querySelector("#generate");

var listUpper = ["A", "B", "C", "D", "E", "F", 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var listLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var listNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var listSpecial = ['!', '@', '#', '$', '%', '^', '&', '*'];




//This fucntion does everything at once 
// First requesting password length, and verifying a valid length


    
function generatePassword() {
  var workingPass = [];
  var possibleCharacters = [];

  var passLength = prompt("Enter a password length between 8 and 128");
  if ((passLength > 128) || (passLength < 8)) {
    alert("Sorry, password length invalid. Please try again.")
    return;
  }

  var upperCase = confirm("Allow uppercase characters?");
  var lowerCase = confirm("Allow lowercase characters?");
  var numbers = confirm("Allow numbers?");
  var special = confirm("Allow special characters?");

  // Then confirming which character types are desired for the password
  // Then making if statments to concat relevant list arrays into the working "possibleCharacter" array
  if (upperCase === true) {
    possibleCharacters = possibleCharacters.concat(listUpper);

  }
  if (lowerCase === true) {
    possibleCharacters = possibleCharacters.concat(listLower);
    
  }
  if (numbers === true) {
    possibleCharacters = possibleCharacters.concat(listNumbers);
  }
  if (special === true) {
    possibleCharacters = possibleCharacters.concat(listSpecial);
    
  }
  // Then running a for loop, setting i to zero and incrementing by 1 until i = passLength
  for (var i = 0; i < passLength; i++) {
    //once at each loop, randomly selecting a character from all of possibleCharacters and concatenating it to workingPass
    workingPass = workingPass.concat(possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)]);

  }
  // finally joining the new randomly assembled string in workingPass 
  return workingPass.join("")


}

/*This function is called by the button 
calls the generatePassword function, and outputs it as text*/
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

/* Event listener that receives input from the user to initiate 
the writePassword function*/
generateBtn.addEventListener("click", writePassword);
