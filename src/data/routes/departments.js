const express = require("express");
const router = express.Router();
const pool = require("../connection");

router.get("/getdepartments", (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) {
      res.json({ displayMessage: err, data: "", isSuccess: false });
    } else {
      let query =
        "select * from (select d.deptId,d.deptName,d.medium,concat(f.fname,' ',f.lname) as headOfDept from departments d, faculties f where d.headOfDept = f.facultyId) as dept left join (select deptId, count(*) as StudentCount from students group by deptId) as std on std.deptId = dept.deptId;";
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
