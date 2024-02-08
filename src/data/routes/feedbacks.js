const express = require("express");
const router = express.Router();
const {
  isEmail,
  isPhone,
  isString,
  isBlank,
} = require("../validate/validation");
const pool = require("../connection");

// insert feedbacks
router.post("/insert", async (req, res) => {
  let fullname = req.body.fullname.trim();
  let email = req.body.email.trim();
  let phone = req.body.phone.trim();
  let message = req.body.message.trim();

  if (!isString(fullname)) {
    res.json({
      displayMessage: "Please enter a valid name",
      data: "",
      isSuccess: false,
    });
  } else if (!isEmail(email)) {
    res.json({
      displayMessage: "Please enter a valid email address.",
      data: "",
      isSuccess: false,
    });
  } else if (!isPhone(phone)) {
    res.json({
      displayMessage: "Please enter a valid phone number.",
      data: "",
      isSuccess: false,
    });
  } else if (isBlank(message)) {
    res.json({
      displayMessage: "Please enter a message.",
      data: "",
      isSuccess: false,
    });
  } else {
    let query =
      "insert into feedbacks (fullname,email,phone,message) value ('" +
      fullname +
      "','" +
      email +
      "','" +
      phone +
      "','" +
      message +
      "')";
    pool.getConnection((err, connection) => {
      connection.query(query, (err, data, fields) => {
        if (err) {
          switch (err.code) {
            case "ER_DUP_ENTRY":
              res.json({
                displayMessage: "Your already connected with us. Thank You!",
                data: "",
                isSuccess: true,
              });
              break;
            case "ER_WRONG_VALUE_COUNT_ON_ROW":
              res.json({
                displayMessage:
                  "The request could not be understood or was missing required parameters.",
                data: "",
                isSuccess: false,
              });
              break;
            case "ER_DATA_TOO_LONG":
              res.json({
                displayMessage: "Data is too long",
                data: "",
                isSuccess: false,
              });
              break;
            default:
              res.json({
                displayMessage:
                  "An unexpected error occurred while processing your request. Please try again later.",
                data: "",
                isSuccess: false,
              });
              break;
          }
        } else {
          res.json({ displayMessage: "", data: data, isSuccess: true });
        }
      });
      connection.release();
    });
  }
});

// get all feedbacks
router.get("/allfeedbacks", async (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) {
      res.json({ displayMessage: err, data: "", isSuccess: false });
    } else {
      let query = "select * from feedbacks where status = 'active'";
      connection.query(query, (err, data, fields) => {
        if (err) {
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
    }
  });
  // pool.end();
});

// remove all feedbacks
router.post("/deleteAll", async (req, res) => {
  let query =
    "update feedbacks set status = 'inactive'";
  await pool.getConnection((err, connection) => {
    connection.query(query, (err, data, fields) => {
      if (err) {
        res.json({ displayMessage: err, data: "", isSuccess: false });
      } else {
        res.json({ displayMessage: "", data: data, isSuccess: true });
      }
    });
    connection.release();
  });
});

router.post("/deleteOne", async (req, res) => {
  let feedbackNo = req.body.srno;

  if (isBlank(feedbackNo)) {
    res.json({
      displayMessage: "Please provide a srno",
      data: "",
      isSuccess: false,
    });
  } else {
    let query =
      "update feedbacks set status = 'inactive' where srno=" + feedbackNo;
    await pool.getConnection((err, connection) => {
      connection.query(query, (err, data, fields) => {
        if (err) {
          res.json({ displayMessage: err, data: "", isSuccess: false });
        } else {
          res.json({ displayMessage: "", data: data, isSuccess: true });
        }
      });
      connection.release();
    });
  }
});

module.exports = router;
