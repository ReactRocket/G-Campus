const express = require("express");
const router = express.Router();
// const {
//   isEmail,
//   isPhone,
//   isString,
//   isBlank,
// } = require("../validate/validation");
const pool = require("../connection");

// api to get all the faculties data
router.get("/allfaculties", async (req, res) => {
    pool.getConnection((err, connection) => {
      if (err) {
        res.json({ displayMessage: err, data: "", isSuccess: false });
      } else {
        let query = "select * from faculties where status = 'active';";
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
