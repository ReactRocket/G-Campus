function greet(text) {
  var currentDate = new Date();
  var currentHour = currentDate.getHours();
  if (currentHour < 12) {
    return `Good Morning, ${text}`;
  } else if (currentHour < 17) {
    return `Good Afternoon, ${text}`;
  } else {
    return `Good Evening, ${text}`;
  }
}

module.exports = greet;
