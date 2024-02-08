function isEmail(email) {
  let emailAddress = email.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  if (
    emailAddress === null ||
    emailAddress.length < 0 ||
    !emailRegex.test(emailAddress)
  ) {
    return false;
  } else {
    return true;
  }
}

function isPhone(phone) {
  let phoneNumber = Number(phone.trim());
  const mobileNumberPattern = /^[0-9]{10}$/;
  if (
    phoneNumber === null ||
    phoneNumber.length < 0 ||
    !mobileNumberPattern.test(phoneNumber)
  ) {
    return false;
  } else {
    return true;
  }
}

function isString(string) {
  let trimmedString = string.trim();
  const stringRegex = /[0-9!@#$%^&*()_+{}:;<>,.?~\\/-]/;
  if (
    trimmedString === null ||
    trimmedString === "" ||
    stringRegex.test(trimmedString)
  ) {
    return false;
  } else {
    return true;
  }
}

function isBlank(string) {
  if (!string) return true;
  let trimmedString = string.trim();
  if (trimmedString === "" || trimmedString === null) {
    return true;
  } else {
    return false;
  }
}

module.exports = { isEmail, isPhone, isString, isBlank };
