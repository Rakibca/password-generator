// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {

  let pwdLength = window.prompt("Please specify password length.");
  if (pwdLength < 8 || pwdLength > 128) {
    window.alert("Password length should be at least 8 characters and no more than 128 characters!");
    let emptyString = "";
    return emptyString;
  }

  let lowerCase = window.confirm("Do you want lower case character types?");
  var lettersLC;
  if (lowerCase) {
    lettersLC = ("abcdefghijklmnopqrstuvwxyz");
  } else {
    lettersLC = ("");
  }

  let upperCase = window.confirm("Do you want upper case character types?");
  var lettersUC;
  if (upperCase) {
    lettersUC = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  } else {
    lettersUC = ("");
  }

  let numeric = window.confirm("Do you want numeric character types?");
  var lettersNum;
  if (numeric) {
    lettersNum = ("0123456789");
  } else {
    lettersNum = ("");
  }

  let specialChar = window.confirm("Do you want special character types?");
  var lettersSC;
  if (specialChar) {
    lettersSC = (" !#$%&'()*+,-./:;<=>?@[\]^_`{|}~");
  } else {
    lettersSC = ("");
  }

  let lettersChosen = lettersLC + lettersUC + lettersNum + lettersSC;
  let lengthLettersChosen = lettersChosen.length;
  let pwdGenerated = "";

  if (lengthLettersChosen != 0) {
    for (let i = 0; i < pwdLength; i++) {
      let letterGenerated = lettersChosen[Math.floor(Math.random() * lengthLettersChosen)];
      pwdGenerated = pwdGenerated + letterGenerated;
    }
  }
  return pwdGenerated;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
