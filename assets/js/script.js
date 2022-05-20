var generateBtn = document.querySelector("#generate");

// Function to write random password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

//Function to generate a random password using character types chosen by user
function generatePassword() {

  //Validation checks to see if the user is within the correct range for password length and inputs an integer
  let pwdLength = window.prompt("Please specify password length.");
  if (pwdLength != parseInt(pwdLength)) {
    window.alert("Password length should be an integer!");
    let emptyString = "";
    return emptyString;
  }

  if (pwdLength < 8 || pwdLength > 128) {
    window.alert("Password length should be at least 8 characters and no more than 128 characters!");
    let emptyString = "";
    return emptyString;
  }

  //Confirming user for lower case character types
  let lowerCase = window.confirm("Do you want lower case character types?");
  var lettersLC;
  if (lowerCase) {
    lettersLC = ("abcdefghijklmnopqrstuvwxyz");
  } else {
    lettersLC = ("");
  }

  //Confirming user for upper case character types
  let upperCase = window.confirm("Do you want upper case character types?");
  var lettersUC;
  if (upperCase) {
    lettersUC = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  } else {
    lettersUC = ("");
  }

  //Confirming user for numeric character types
  let numeric = window.confirm("Do you want numeric character types?");
  var lettersNum;
  if (numeric) {
    lettersNum = ("0123456789");
  } else {
    lettersNum = ("");
  }

  //Confirming user for special character types
  let specialChar = window.confirm("Do you want special character types?");
  var lettersSC;
  if (specialChar) {
    lettersSC = (" !#$%&'()*+,-./:;<=>?@[\]^_`{|}~");
  } else {
    lettersSC = ("");
  }

  //Creating the entire chosen character types as a string and finding its length
  let lettersChosen = lettersLC + lettersUC + lettersNum + lettersSC;
  let lengthLettersChosen = lettersChosen.length;
  let pwdGenerated = "";

  //Generating a random password and return it to the writePassword() function
  if (lengthLettersChosen != 0) {
    for (let i = 0; i < pwdLength; i++) {
      let letterGenerated = lettersChosen[Math.floor(Math.random() * lengthLettersChosen)];
      pwdGenerated = pwdGenerated + letterGenerated;
    }
  }
  return pwdGenerated;
}

// Event listener added to the Generate Password button
generateBtn.addEventListener("click", writePassword);
