function greet() {
  var currentDate = new Date();
  var currentHour = currentDate.getHours();
  if (currentHour < 12) {
    return "Good Morning";
  } else if (currentHour < 17) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
}

module.exports = greet;
