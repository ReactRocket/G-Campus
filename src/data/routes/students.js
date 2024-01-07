const express = require("express");
const router = express.Router();
const pool = require("../connection");
const {
  isEmail,
  isPhone,
  isString,
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
  let fname = req.body.fname.trim();
  let mname = req.body.mname.trim();
  let lname = req.body.lname.trim();
  let dob = req.body.dob.trim();
  let gender = req.body.gender.trim();
  let blood = req.body.blood.trim();
  let address = req.body.address.trim();
  let city = req.body.city.trim();
  let state = req.body.state.trim();
  let phone = req.body.phone.trim();
  let email = req.body.email.trim();
  let tenthSchool = req.body.tenthSchool.trim();
  let tenthPassingYear = req.body.tenthPassingYear.trim();
  let tenthPercentage = req.body.tenthPercentage.trim();
  let twelfthSchool = req.body.twelfthSchool.trim();
  let twelfthPassingYear = req.body.twelfthPassingYear.trim();
  let twelfthPercentage = req.body.twelfthPercentage.trim();
  let deptId = req.body.deptId.trim();
  let classId = req.body.classId.trim();

  let result =
    isBlank(fname) &&
    isBlank(lname) &&
    isBlank(mname) &&
    isBlank(dob) &&
    isBlank(gender) &&
    isBlank(blood) &&
    isBlank(address) &&
    isBlank(city) &&
    isBlank(state) &&
    isBlank(tenthSchool) &&
    isBlank(tenthPassingYear) &&
    isBlank(tenthPercentage) &&
    isBlank(twelfthSchool) &&
    isBlank(twelfthPassingYear) &&
    isBlank(twelfthPercentage) &&
    isBlank(deptId) &&
    isBlank(classId);

  let query =
    "insert into students (fname,mname,lname,dob,gender,blood,address,city,state,phone,email,tenthSchool,tenthPassingYear,tenthPercentage,twelfthSchool,twelfthPassingYear,twelfthPercentage,deptId,classId) values ('" +
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
    "," +
    classId +
    ")";
});

module.exports = router;
