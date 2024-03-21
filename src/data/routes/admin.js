const express = require("express");
const router = express.Router();
const pool = require("../connection");
// const path = require("path");
// const {
//   isEmail,
//   isPhone,
//   // isString,
//   isBlank,
//   getValue,
// } = require("../validate/validation");

router.get("/getalldetails", (req, res) => {
  let query =
    "select * from (select count(sid) AS BCOM from students where deptId in (101,102)) as BCOM,(select count(sid) AS BBA from students where deptId = 103) as BBA,(select count(sid) AS BCA from students where deptId = 104) as BCA,(select count(sid) AS TOTAL from students) as Total;";
  query += "select count(*) as facultyCount from faculties;";
  query +=
    "select count(*) as feedbacks from feedbacks where status = 'active';";
  query += "select count(*) as departments from departments;";
  query +=
    "select f.facultyId,concat(f.fname,' ',f.lname) as fullname,f.gender,f.experience,f.profile,f.qualification,d.deptId from faculties f, departments d where d.headOfDept = f.facultyId;";
  query +=
    "select concat(f.fname,' ',f.lname) as fullname,f.gender,f.qualification,f.experience,f.profile,c.class,c.deptId from faculties f,classes c where f.classId is not null and f.classId = c.classId;";

  pool.getConnection((err, connection) => {
    connection.query(query, (err, data, fields) => {
      if (err) {
        connection.release();
        res.json({ displayMessage: err, data: "", isSuccess: false });
      } else {
        if (data.length > 0) {
          res.json({
            displayMessage: "",
            data: {
              // student course wise count
              studentcount: data[0][0],
              // faculty
              faculty: {
                facultyCount: data[1][0]["facultyCount"],
                faculties: data[5],
              },
              // feedback count
              feedbacks: data[2][0]["feedbacks"],
              // department count
              department: data[3][0]["departments"],
              // head of department
              headOfDept: data[4],
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
    connection.release();
  });
});

module.exports = router;
