const express = require("express");
const router = express.Router();
const pool = require("../connection");
const path = require("path");
const generatePassword = require("../../utils/PasswordGenerator");

const {
  isEmail,
  isPhone,
  // isString,
  isBlank,
  getValue,
} = require("../validate/validation");

// profile pic store
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "..", "..", "images"));
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });
const uploadImg = upload.single("profilePic");

// router.use("/uploads", express.static("uploads"));

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
router.post("/student", (req, res) => {
  try {
    let sid = getValue("sid", req.body, "Student Id");
    if (!sid) {
      res.json({
        displayMessage: "Please enter a student id",
        data: "",
        isSuccess: false,
      });
    } else {
      let query =
        "SELECT sid,fname,mname,lname,dob,gender,blood,address,city,state,phone,email,tenthSchool,tenthPassingYear,tenthPercentage,twelfthSchool,twelfthPassingYear,twelfthPercentage,students.deptId,students.classId,password,profile,status,verified,class FROM students,classes where classes.classId = students.classId and sid =" +
        sid;
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
  } catch (error) {
    res.json({
      displayMessage: error.message,
      data: "",
      isSuccess: false,
    });
  }
});

// insert a student
router.post("/insert", uploadImg, (req, res) => {
  try {
    let fname = getValue("fname", req.body, "First Name");
    let mname = getValue("mname", req.body, "Middle Name");
    let lname = getValue("lname", req.body, "Last Name");
    let dob = getValue("dob", req.body, "Date Of Birth");
    let gender = getValue("gender", req.body, "Gender");
    let blood = getValue("blood", req.body, "Blood Group");
    let address = getValue("address", req.body, "Address");
    let city = getValue("city", req.body, "");
    let state = getValue("state", req.body, "state");
    let phone = getValue("phone", req.body, "phone");
    let email = getValue("email", req.body, "email address");
    let tenthSchool = getValue("tenthSchool", req.body, "10th School Name");
    let tenthPassingYear = getValue(
      "tenthPassingYear",
      req.body,
      "10th Passing Year"
    );
    let tenthPercentage = getValue(
      "tenthPercentage",
      req.body,
      "10th Percentage"
    );
    let twelfthSchool = getValue("twelfthSchool", req.body, "12th School Name");
    let twelfthPassingYear = getValue(
      "twelfthPassingYear",
      req.body,
      "12th Passing Year"
    );
    let twelfthPercentage = getValue(
      "twelfthPercentage",
      req.body,
      "12th Percentage"
    );
    let deptId = getValue("deptId", req.body, "Department");
    let filename = getValue("filename", req.file, "Profile pic");

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
    } else if (!isEmail(email)) {
      res.json({
        displayMessage: "Please enter a valid email",
        data: "",
        isSuccess: false,
      });
    } else if (!isPhone(phone)) {
      res.json({
        displayMessage: "Please enter a valid phone",
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
    } else if (isBlank(filename)) {
      res.json({
        displayMessage: "Please upload a image",
        data: "",
        isSuccess: false,
      });
    } else {
      let query =
        "insert into students (fname,mname,lname,dob,gender,blood,address,city,state,phone,email,tenthSchool,tenthPassingYear,tenthPercentage,twelfthSchool,twelfthPassingYear,twelfthPercentage,deptId, profile) values ('" +
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
        ",'" +
        filename +
        "')";
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
            // console.log(err);
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
  } catch (error) {
    res.json({
      displayMessage: error.message,
      data: "",
      isSuccess: false,
    });
  }
});

// checking existing emails
router.post("/emailverification", (req, res) => {
  try {
    let email = getValue("email", req.body, "Email Address");
    if (!isEmail(email)) {
      res.json({
        displayMessage: "Please Provide a valid email",
        data: "",
        isSuccess: false,
      });
    } else {
      let query =
        "select count(sid) as verified from students where email = '" +
        email +
        "'";
      pool.getConnection((err, connection) => {
        connection.query(query, (err, data, fields) => {
          if (err) {
            connection.release();
            res.json({ displayMessage: err, data: "", isSuccess: false });
          } else {
            res.json({
              displayMessage:
                data[0].verified === 0
                  ? ""
                  : "Email already registered. Sign in or use a different email.",
              data: data[0].verified === 0 ? true : false,
              isSuccess: true,
            });
          }
        });
        connection.release();
      });
    }
  } catch (error) {
    res.json({
      displayMessage: error.message,
      data: "",
      isSuccess: false,
    });
  }
});

// student authentication
router.post("/auth", (req, res) => {
  try {
    let email = getValue("email", req.body, "Email Address");
    let password = getValue("password", req.body, "Password");

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
        "SELECT COUNT(*) as count,verified as status,sid FROM `students` WHERE email = '" +
        email +
        "' and password='" +
        password +
        "' group by sid;";
      pool.getConnection((err, connection) => {
        if (err) res.json({ displayMessage: err, data: "", isSuccess: false });
        connection.query(query, (err, data, fields) => {
          if (err) {
            connection.release();
            res.json({ displayMessage: err, data: "", isSuccess: false });
          } else {
            res.json({
              displayMessage: "",
              data: data,
              isSuccess: true,
            });
          }
        });
        connection.release();
      });
    }
  } catch (error) {
    res.json({
      displayMessage: error.message,
      data: "",
      isSuccess: false,
    });
  }
});

// department wise student count
router.get("/coursewisestudents", (req, res) => {
  try {
    let query =
      "select * from (select count(sid) AS BCOM from students where deptId in (101,102)) as BCOM,(select count(sid) AS BBA from students where deptId = 103) as BBA,(select count(sid) AS BCA from students where deptId = 104) as BCA,(select count(sid) AS Total from students) as Total;";
    pool.getConnection((err, connection) => {
      connection.query(query, (err, data, fields) => {
        if (err) {
          res.json({ displayMessage: err, data: "", isSuccess: false });
        }
        connection.query(query, (err, data, fields) => {
          if (err) {
            connection.release();
            res.json({ displayMessage: err, data: "", isSuccess: false });
          } else {
            if (data.length > 0) {
              res.json({ displayMessage: "", data: data[0], isSuccess: true });
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
  } catch (error) {
    res.json({ displayMessage: error, data: "", isSuccess: false });
  }
});

//  all students details
router.get("/studentinfo", (req, res) => {
  let query =
    "select s.sid,concat(s.fname,' ',s.lname) as name,s.dob,s.gender,s.blood,concat(s.address,',',s.city,',',s.state) as address,s.phone,s.email,s.tenthSchool,s.tenthPassingYear,s.tenthPercentage,s.twelfthSchool,s.twelfthPassingYear,s.twelfthPercentage,d.deptName,c.class,s.profile from students s, departments d, classes c where s.deptId = d.deptId and s.classId = c.classId;";
  query +=
    "select * from (select count(sid) as unverified from students where verified = 'false') as std,( select count(sid) as verified from students where verified = 'true') as student;";
  query +=
    "select * from (select count(sid) AS BCOM from students where deptId in (101,102)) as BCOM,(select count(sid) AS BBA from students where deptId = 103) as BBA,(select count(sid) AS BCA from students where deptId = 104) as BCA,(select count(sid) AS TOTAL from students) as Total;";

  pool.getConnection((err, connection) => {
    if (err) {
      res.json({ displayMessage: err, data: "", isSuccess: false });
    } else {
      connection.query(query, (err, dbData, fields) => {
        connection.release();
        if (err) {
          res.json({ displayMessage: err, data: "", isSuccess: false });
        } else {
          if (dbData.length > 0) {
            res.json({
              displayMessage: err,
              data: {
                students: dbData[0],
                studentcount: dbData[1][0],
                departmentwise: dbData[2][0],
              },
              isSuccess: true,
            });
          } else {
            res.json({
              displayMessage: "No Data Found",
              data: "",
              isSuccess: true,
            });
          }
        }
      });
    }
  });
});

// under verification students details
router.get("/unverifiedstudent", (req, res) => {
  let query = "select * from students where verified = 'false'";
  pool.getConnection((err, connection) => {
    if (err) {
      res.json({ displayMessage: err, data: "", isSuccess: false });
    } else {
      connection.query(query, (err, data) => {
        if (err) {
          res.json({ displayMessage: err, data: "", isSuccess: false });
        } else {
          if (data.length > 0) {
            res.json({
              displayMessage: "",
              data: data,
              isSuccess: true,
            });
          } else {
            res.json({
              displayMessage: "No Data Found",
              data: "",
              isSuccess: true,
            });
          }
        }
      });
    }
  });
});

// make payment
router.post("/payment", (req, res) => {
  try {
    let sid = getValue("sid", req.body, "Student Id");
    if (!sid) {
      res.json({
        displayMessage: "Please enter a student id",
        data: "",
        isSuccess: false,
      });
    } else {
      let query =
        "insert into student_fees (classId,sid) values ((select classId from students where sid = " +
        sid +
        ")," +
        sid +
        ")";
      pool.getConnection((err, connection) => {
        connection.query(query, (err, data, fields) => {
          if (err) {
            connection.release();
            res.json({ displayMessage: err, data: "", isSuccess: false });
          } else {
            res.json({ displayMessage: "", data: data, isSuccess: true });
          }
        });
        connection.release();
      });
    }
  } catch (error) {
    res.json({
      displayMessage: error.message,
      data: "",
      isSuccess: false,
    });
  }
});

// fees info
router.post("/paymentinfo", (req, res) => {
  try {
    let sid = getValue("sid", req.body, "Student Id");
    if (!sid) {
      res.json({
        displayMessage: "Please enter a student id",
        data: "",
        isSuccess: false,
      });
    } else {
      let query =
        "select class,s.deptId,fees, ifnull(f.status,'false') as fees_status from students s join classes c on s.classId = c.classId left join student_fees f on s.classId = f.classId where s.sid = " +
        sid;
      pool.getConnection((err, connection) => {
        connection.query(query, (err, data, fields) => {
          if (err) {
            connection.release();
            res.json({ displayMessage: err, data: "", isSuccess: false });
          } else {
            connection.release();
            res.json({ displayMessage: "", data: data[0], isSuccess: true });
          }
        });
      });
    }
  } catch (error) {
    res.json({
      displayMessage: error.message,
      data: "",
      isSuccess: false,
    });
  }
});

router.post("/forgetpassword", (req, res) => {
  try {
    let email = getValue("email", req.body, "Email Address");
    let npassword = getValue("npassword", req.body, "New Password");

    if (!isEmail(email)) {
      res.json({
        displayMessage: "Please Provide a valid email",
        data: "",
        isSuccess: false,
      });
    } else if (isBlank(npassword)) {
      res.json({
        displayMessage: "Please Provide new password",
        data: "",
        isSuccess: false,
      });
    } else {
      let query =
        "update students set password = '" +
        npassword +
        "' where email = '" +
        email +
        "';";
      pool.getConnection((err, connection) => {
        connection.query(query, (err, data, fields) => {
          if (err) {
            connection.release();
            res.json({ displayMessage: err, data: "", isSuccess: false });
          } else {
            res.json({
              displayMessage: "",
              data: data.affectedRows,
              isSuccess: true,
            });
          }
        });
        connection.release();
      });
    }
  } catch (error) {
    res.json({
      displayMessage: error.message,
      data: "",
      isSuccess: false,
    });
  }
});

router.post("/verifystudent", (req, res) => {
  try {
    let classId = {
      101: 1101,
      102: 1104,
      103: 1107,
      104: 1110,
    };

    let sid = parseInt(getValue("sid", req.body, "Student unique id"));
    let deptId = parseInt(getValue("deptId", req.body, "Department Id"));
    let email = getValue("email", req.body, "Email Address");

    if (!Number.isFinite(sid)) {
      res.json({
        displayMessage: "Please Provide a student unique id",
        data: "",
        isSuccess: false,
      });
    } else if (!isEmail(email)) {
      res.json({
        displayMessage: "Please Provide a valid email",
        data: "",
        isSuccess: false,
      });
    } else if (!Number.isFinite(deptId)) {
      res.json({
        displayMessage: "Please Provide a department id",
        data: "",
        isSuccess: false,
      });
    } else {
      let password = generatePassword(6).toString();
      let query =
        "update students set classId = " +
        classId[deptId] +
        ", status = 'active', verified = 'true', password= '" +
        password +
        "' where sid =" +
        sid +
        ";";
      pool.getConnection((err, connection) => {
        connection.query(query, async (err, data, fields) => {
          if (err) {
            connection.release();
            res.json({ displayMessage: err, data: "", isSuccess: false });
          } else {
            res.json({
              displayMessage: "",
              data: password,
              isSuccess: true,
            });
          }
        });
        connection.release();
      });
      // res.json({ sid: sid, deptId: deptId, classId: classId[deptId],password:generatePassword(6)});
    }
  } catch (error) {
    res.json({
      displayMessage: error.message,
      data: "01",
      isSuccess: false,
    });
  }
});

router.post("/updatedetails", uploadImg, (req, res) => {
  try {
    let sid = parseInt(getValue("sid", req.body, "Student unique id"));
    let address = null;
    let phone = null;
    let password = null;
    let filename = null;

    if (!Number.isFinite(sid)) {
      res.json({
        displayMessage: "Please Provide a student unique id",
        data: "",
        isSuccess: false,
      });
    } else if (!req.body.address) {
      res.json({
        displayMessage: "Please Provide a valid address",
        data: "",
        isSuccess: false,
      });
    } else if (!req.body.phone) {
      res.json({
        displayMessage: "Please enter a valid phone",
        data: "",
        isSuccess: false,
      });
    } else if (!req.body.password) {
      res.json({
        displayMessage: "Please upload a password",
        data: "",
        isSuccess: false,
      });
    } else {
      phone = getValue("phone", req.body, "phone");
      address = getValue("address", req.body, "Address");
      password = getValue("password", req.body, "Password");
      filename = getValue("filename", req.file, "Profile pic");

      let query = "update students set";

      if (address) {
        query += " address = '" + address + "' ";
      }
      if (phone) {
        query += ", phone = '" + phone + "'";
      }
      if (password) {
        query += ", password = '" + password + "'";
      }
      if (req?.file?.filename) {
        query += ", profile = '" + filename + "'";
      }

      query += " where sid=" + sid + ";";
      pool.getConnection((err, connection) => {
        connection.query(query, (err, data, fields) => {
          if (err) {
            connection.release();
            res.json({ displayMessage: err, data: "", isSuccess: false });
          } else {
            res.json({
              displayMessage: "",
              data: data.affectedRows,
              isSuccess: true,
            });
          }
        });
        connection.release();
      });
    }
  } catch (error) {
    res.json({
      displayMessage: error.message,
      data: "",
      isSuccess: false,
    });
  }
});

module.exports = router;
