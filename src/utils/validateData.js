export function validateForm(dataObj) {
  let flag = true;
  for (let [key, value] of Object.entries(dataObj)) {
    if (key === "phone") {
      if (!validatePhone(dataObj)) {
        flag = false;
        break;
      }
    } else if (value === null || value === "") {
      flag = false;
      alert("Please enter the " + key);
      document.getElementById(key).focus();
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
    alert("Please enter the Phone");
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
  var email = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  if (formData.email === null || formData.email === "") {
    alert("Please enter the Email Address");
    document.getElementById("email").focus();
    return false;
  } else if (formData.phone.match(email)) {
    return true;
  } else {
    alert("Please enter the a valid Email Address.");
    document.getElementById("email").focus();
    return false;
  }
}

module.export = { validateForm, validatePhone, validateEmail };
