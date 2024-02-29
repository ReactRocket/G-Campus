const express = require("express");
const router = express.Router();
const pool = require("../connection");

router.get("/getdepartments", (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) {
      res.json({ displayMessage: err, data: "", isSuccess: false });
    } else {
      let query =
        "select d.deptId as deptId, d.deptName as deptName, d.medium as medium, concat(f.fname,' ',f.lname) as headOfDept, count(s.sid) as studentCount from departments d, faculties f,students s where d.headOfDept = f.facultyId and d.deptId = s.deptId group by s.deptId;";
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

module.exports = router;
