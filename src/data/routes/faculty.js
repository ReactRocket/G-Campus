const express = require("express");
const router = express.Router();
const path = require("path");
const {
  //   isEmail,
  //   isPhone,
  // isString,
  isBlank,
} = require("../validate/validation");
const pool = require("../connection");

const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "src/images");
  },
  filename: function (req, file, cb) {
    cb(null, "faculty-" + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });
const uploadImg = upload.single("profilePic");

// api to get all the faculties data
router.get("/allfaculties", async (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) {
      res.json({ displayMessage: err, data: "", isSuccess: false });
    } else {
      let query =
        "select facultyid, concat(fname,' ',lname) as fullname, gender, qualification, experience, profile from faculties;";
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
});

router.post("/insert", uploadImg, (req, res) => {
  try {
    let fname = req.body.fname;
    let lname = req.body.lname;
    let gender = req.body.gender;
    let qualification = req.body.qualification;
    let experience = req.body.experience;
    let imagePath = req.file.filename;

    if (isBlank(fname)) {
      res.json({
        displayMessage: "Please enter a first name",
        data: "",
        isSuccess: false,
      });
    } else if (isBlank(lname)) {
      res.json({
        displayMessage: "Please enter a last name",
        data: "",
        isSuccess: false,
      });
    } else if (isBlank(gender)) {
      res.json({
        displayMessage: "Please enter a gender",
        data: "",
        isSuccess: false,
      });
    } else if (isBlank(qualification)) {
      res.json({
        displayMessage: "Please enter a qualification",
        data: "",
        isSuccess: false,
      });
    } else if (isBlank(experience)) {
      res.json({
        displayMessage: "Please enter a experience",
        data: "",
        isSuccess: false,
      });
    } else if (isBlank(imagePath)) {
      res.json({
        displayMessage: "Please upload a image",
        data: "",
        isSuccess: false,
      });
    } else {
      let query =
        "insert into faculties (fname,lname,gender,qualification,experience,profile) value ('" +
        fname +
        "','" +
        lname +
        "','" +
        gender +
        "','" +
        qualification +
        "','" +
        experience +
        "','" +
        imagePath +
        "')";

      pool.getConnection((err, connection) => {
        if (err) {
          res.json({ displayMessage: err, data: "", isSuccess: false });
        } else {
          connection.query(query, (err, data, fields) => {
            if (err) {
              res.json({ displayMessage: err, data: "", isSuccess: false });
            } else {
              res.json({ displayMessage: "", data: data, isSuccess: true });
            }
          });
        }
      });
    }
  } catch (error) {
    res.json({
      displayMessage: "something went wrong, try again some time later!",
      data: "",
      isSuccess: false,
    });
  }
});

module.exports = router;
