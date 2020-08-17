// Set global variables
var selectCharLength;
var acceptUppercase;
var acceptLowercase;
var acceptNumbers;

// Get characters using ASCII codes
var upperCase = getCharacters(65, 90);
var lowerCase = getCharacters(97, 122);
var numbers = getCharacters(48, 57);
var specialCharacters = getCharacters(33, 47).concat(getCharacters(58, 64)).concat(getCharacters(91, 96)).concat(getCharacters(123, 126));

// Loop through ASCII variables set above from low to high
function getCharacters(low, high) {
  var characters = [];
  for (let i = low; i <= high; i++) {
    characters.push(i);
  }
  return characters;
}

// Prompt user's selection of password format
function generatePassword () {

  // Prompt user's preference of character length
  selectCharLength = parseInt(prompt("How long would you like your password to be? Please select between 8 and 128."));

  // Validate user's input to be between 8 and 128 characters
  while (!selectCharLength || selectCharLength < 8 || selectCharLength > 128) {
    alert("You need to provide a valid answer, please try again!");
    selectCharLength = parseInt(prompt("Please select between 8 and 128."));
  };

  // Prompt user's character preferences
  if (selectCharLength) {
    acceptUppercase = confirm("Should the password include Uppercase characters?");
    acceptLowercase = confirm("Should the password include Lowercase characters?");
    acceptNumbers = confirm("Should the password include Numbers?");
    acceptSpecialChar = confirm("Should the password include Special characters?");
  };
  // Validate user's selection to include at least one choice
  if (!acceptUppercase && !acceptLowercase && !acceptNumbers && !acceptSpecialChar) {
    selection = alert("You must choose at least one character type! Please try again.");
  }
  // Get result from the selection
  else if (acceptUppercase && acceptLowercase && acceptNumbers && acceptSpecialChar) {
    selection = upperCase.concat(lowercase, specialCharacters, numbers);
  }
  else if (acceptUppercase && acceptLowercase && acceptNumbers) {
    selection = upperCase.concat(lowercase, numbers);
  }
  else if (acceptUppercase && acceptLowercase && specialCharacters) {
    selection = upperCase.concat(lowercase, specialCharacters);
  }
  else if (acceptUppercase && acceptNumbers && specialCharacters) {
    selection = upperCase.concat(numbers, specialCharacters);
  }
  else if (acceptLowercase && acceptNumbers && specialCharacters) {
    selection = lowercase.concat(numbers, specialCharacters);
  }
  else if (acceptUppercase && acceptLowercase) {
    selection = upperCase.concat(lowercase);
  }
  else if (acceptUppercase && specialCharacters) {
    selection = upperCase.concat(specialCharacters);
  }
  else if (acceptUppercase && acceptNumbers) {
    selection = upperCase.concat(numbers);
  }
  else if (acceptLowercase && acceptNumbers) {
    selection = lowercase.concat(numbers);
  }
  else if (acceptLowercase && specialCharacters) {
    selection = lowercase.concat(specialCharacters);
  }
  else if (acceptNumeric && specialCharacters) {
    selection = numbers.concat(specialCharacters);
  }
  else if (acceptUppercase) {
    selection = upperCase;
  }
  else if (acceptLowercase) {
    selection = lowercase;
  }
  else if (specialCharacters) {
    selection = specialCharacters;
  }
  else if (acceptNumbers) {
    selection = numbers;
  };

  // Pass through the selection result
  var combinePassword = []
  // Scramble user's selection(s) then convert to string
  for (let i = 0; i < selectCharLength; i++) {
    var charCode = selection[Math.floor(Math.random() * selection.length)]
    combinePassword.push(String.fromCharCode(charCode));
  }
  // Combine user selection(s) together
  return combinePassword.join('');
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);