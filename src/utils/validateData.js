export function validateForm(dataObj) {
  let flag = true;
  for (let [key, value] of Object.entries(dataObj)) {
    if (key === "phone") {
      if (!validatePhone(dataObj)) {
        flag = false;
        break;
      }
    } else if (key === "email") {
      if (!validateEmail(dataObj)) {
        flag = false;
        break;
      }
    } else if (isBlank(value)) {
      flag = false;
      let element = document.getElementById(key);
      let displayMessage = element.getAttribute("display-message");
      alert("Please enter valid the " + displayMessage);
      element.focus();
      break;
    } else {
      flag = true;
    }
  }
  return flag;
}

export function validatePhone(formData) {
  var phoneno = /^\d{10}$/;
  if (formData.phone === null || formData.phone === "") {
    alert("Please enter the Phone Number");
    document.getElementById("phone").focus();
    return false;
  } else if (formData.phone.match(phoneno)) {
    return true;
  } else {
    alert("Please enter the a valid Phone No.");
    document.getElementById("phone").focus();
    return false;
  }
}

export function validateEmail(formData) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let emailAddress = formData.email;
  if (!isBlank(emailAddress)) {
    if (emailAddress.match(emailRegex)) {
      return true;
    } else {
      alert("Please enter the a valid Email Address.");
      document.getElementById("email").focus();
      return false;
    }
  } else {
    alert("Please enter the Email Address");
    document.getElementById("email").focus();
    return false;
  }
}

export function isBlank(string) {
  if (
    string === "" ||
    string === null ||
    string === "default" ||
    string.length < 2
  ) {
    return true;
  } else {
    return false;
  }
}


module.export = { validateForm, validatePhone, validateEmail, isBlank };
