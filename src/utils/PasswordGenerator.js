function generatePassword(passwordLength){
//   const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
//   const symbolChars = "!@#$%^&*()-=_+[]{}|;:,.<>?";

  let validChars = "";
//   validChars += uppercaseChars;
  validChars += lowercaseChars;
  validChars += numberChars;
//   validChars += symbolChars;

  let newPassword = "";
  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * validChars.length);
    newPassword += validChars[randomIndex];
  }

  return newPassword;
};

module.exports = generatePassword;