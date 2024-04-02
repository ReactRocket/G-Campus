function getDate(datetime) {
  let date = new Date(datetime.toString());
  let year = date.getFullYear();
  let month =
    date.getMonth() + 1 > 9 ? date.getMonth() + 1 : "0" + (date.getMonth() + 1);
  let day = date.getDate() > 9 ? date.getDate() : "0" + date.getDate();
  let datestring = year + "-" + month + "-" + day;
  return datestring;
}

// console.log(getDate(2003-01-10T18:30:10Z));
module.exports = getDate;
