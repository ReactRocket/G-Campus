const express = require("express");
const router = express.Router();
const pool = require("../connection");
const {
  isEmail,
  // isPhone,
  // isString,
  isBlank,
} = require("../validate/validation");

// get all students data
router.get("/allstudents", (req, res) => {
  let query = "select * from students";
  pool.getConnection((err, connection) => {
    connection.query(query, (err, data, fields) => {
      if (err) {
        connection.release();
        res.json({ displayMessage: err, data: "", isSuccess: false });
      } else {
        if (data.length > 0) {
          res.json({ displayMessage: "", data: data, isSuccess: true });
        } else {
          res.json({
            displayMessage: "No Data Found",
            data: "",
            isSuccess: true,
          });
        }
      }
    });
    connection.release();
  });
});

// get a student data
router.get("/student", (req, res) => {
  let sid = req.body.sid;

  if (isBlank(sid)) {
    res.json({
      displayMessage: "Please enter a student id",
      data: "",
      isSuccess: false,
    });
  } else {
    let query = "select * from students where sid =" + sid;
    pool.getConnection((err, connection) => {
      connection.query(query, (err, data, fields) => {
        if (err) {
          connection.release();
          res.json({ displayMessage: err, data: "", isSuccess: false });
        } else {
          if (data.length > 0) {
            res.json({ displayMessage: "", data: data, isSuccess: true });
          } else {
            res.json({
              displayMessage: "No Data Found",
              data: "",
              isSuccess: true,
            });
          }
        }
      });
      connection.release();
    });
  }
});

router.post("/insert", (req, res) => {
  let fname = req.body.fname;
  let mname = req.body.mname;
  let lname = req.body.lname;
  let dob = req.body.dob;
  let gender = req.body.gender;
  let blood = req.body.blood;
  let address = req.body.address;
  let city = req.body.city;
  let state = req.body.state;
  let phone = req.body.phone;
  let email = req.body.email;
  let tenthSchool = req.body.tenthSchool;
  let tenthPassingYear = req.body.tenthPassingYear;
  let tenthPercentage = req.body.tenthPercentage;
  let twelfthSchool = req.body.twelfthSchool;
  let twelfthPassingYear = req.body.twelfthPassingYear;
  let twelfthPercentage = req.body.twelfthPercentage;
  let deptId = req.body.deptId;

  // let result =
  //   isBlank(fname) &&
  //   isBlank(lname) &&
  //   isBlank(mname) &&
  //   isBlank(dob) &&
  //   isBlank(gender) &&
  //   isBlank(blood) &&
  //   isBlank(address) &&
  //   isBlank(city) &&
  //   isBlank(state) &&
  //   isBlank(tenthSchool) &&
  //   isBlank(tenthPassingYear) &&
  //   isBlank(tenthPercentage) &&
  //   isBlank(twelfthSchool) &&
  //   isBlank(twelfthPassingYear) &&
  //   isBlank(twelfthPercentage) &&
  //   isBlank(deptId) &&
  //   isBlank(classId);

  if (isBlank(fname)) {
    res.json({
      displayMessage: "Please enter a first name",
      data: "",
      isSuccess: false,
    });
  } else if (isBlank(mname)) {
    res.json({
      displayMessage: "Please enter a middle name",
      data: "",
      isSuccess: false,
    });
  } else if (isBlank(lname)) {
    res.json({
      displayMessage: "Please enter a last name",
      data: "",
      isSuccess: false,
    });
  } else if (isBlank(dob)) {
    res.json({
      displayMessage: "Please enter a date of birth",
      data: "",
      isSuccess: false,
    });
  } else if (isBlank(gender)) {
    res.json({
      displayMessage: "Please enter a gender",
      data: "",
      isSuccess: false,
    });
  } else if (isBlank(address)) {
    res.json({
      displayMessage: "Please enter a address",
      data: "",
      isSuccess: false,
    });
  } else if (isBlank(city)) {
    res.json({
      displayMessage: "Please enter a city",
      data: "",
      isSuccess: false,
    });
  } else if (isBlank(state)) {
    res.json({
      displayMessage: "Please enter a state",
      data: "",
      isSuccess: false,
    });
  } else if (isBlank(tenthSchool)) {
    res.json({
      displayMessage: "Please enter a tenth school name",
      data: "",
      isSuccess: false,
    });
  } else if (isBlank(tenthPassingYear)) {
    res.json({
      displayMessage: "Please enter a tenth passing year",
      data: "",
      isSuccess: false,
    });
  } else if (isBlank(tenthPercentage)) {
    res.json({
      displayMessage: "Please enter a tenth Percentage",
      data: "",
      isSuccess: false,
    });
  } else if (isBlank(twelfthSchool)) {
    res.json({
      displayMessage: "Please enter a twelfe School Name",
      data: "",
      isSuccess: false,
    });
  } else if (isBlank(twelfthPassingYear)) {
    res.json({
      displayMessage: "Please enter a twelfe Passing Year",
      data: "",
      isSuccess: false,
    });
  } else if (isBlank(twelfthPercentage)) {
    res.json({
      displayMessage: "Please enter a twelfe Percentage",
      data: "",
      isSuccess: false,
    });
  } else {
    let query =
      "insert into students (fname,mname,lname,dob,gender,blood,address,city,state,phone,email,tenthSchool,tenthPassingYear,tenthPercentage,twelfthSchool,twelfthPassingYear,twelfthPercentage,deptId) values ('" +
      fname +
      "','" +
      mname +
      "','" +
      lname +
      "','" +
      dob +
      "','" +
      gender +
      "','" +
      blood +
      "','" +
      address +
      "','" +
      city +
      "','" +
      state +
      "','" +
      phone +
      "','" +
      email +
      "','" +
      tenthSchool +
      "','" +
      tenthPassingYear +
      "','" +
      tenthPercentage +
      "','" +
      twelfthSchool +
      "','" +
      twelfthPassingYear +
      "','" +
      twelfthPercentage +
      "'," +
      deptId +
      ")";
    pool.getConnection((err, connection) => {
      connection.query(query, (err, data, fields) => {
        if (err) {
          switch (err.code) {
            case "ER_DUP_ENTRY":
              res.json({
                displayMessage:
                  email +
                  " is already in used! Please Register with another email address.",
                data: "",
                isSuccess: false,
              });
              break;
            default:
              res.json({
                displayMessage:
                  "Oops! Something went wrong with the registration process. Please try again or contact our support team.",
                data: "",
                isSuccess: false,
              });
              break;
          }
          console.log(err);
          connection.release();
        } else {
          res.json({
            displayMessage:
              "Congratulations! You have successfully registered for courses at G-Campus. Welcome to our academic community.",
            data: data,
            isSuccess: true,
          });
        }
      });
      connection.release();
    });
  }
});

router.post("/auth", (req, res) => {
  let email = req.body.email;
  let password = req.body.password;

  if (!isEmail(email)) {
    res.json({
      displayMessage: "Please enter a valid email",
      data: "",
      isSuccess: false,
    });
  } else if (isBlank(password)) {
    res.json({
      displayMessage: "Please enter a password",
      data: "",
      isSuccess: false,
    });
  } else {
    let query =
      "SELECT COUNT(*) as COUNT FROM `students` WHERE email = '" +
      email +
      "' and password='" +
      password +
      "'";
    pool.getConnection((err, connection) => {
      if (err) res.json({ displayMessage: err, data: "", isSuccess: false });
      connection.query(query, (err, data, fields) => {
        if (err) {
          connection.release();
          res.json({ displayMessage: err, data: "", isSuccess: false });
        } else {
          res.json({
            displayMessage: "",
            data: data[0].COUNT,
            isSuccess: true,
          });
        }
      });
      connection.release();
    });
  }
});

module.exports = router;
