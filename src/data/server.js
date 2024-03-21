const express = require("express"); // for the server
const bodyParser = require("body-parser"); // for parsing and reading json data
const cors = require("cors");

const server = express(); // starting the server

server.use((_req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

server.use(bodyParser.json()); // using the body-parser
server.use(cors()); // using cors to prevent the cors error

const port = 5000;
server.listen(port, () => {
  console.log("server started at localhost " + port);
});

server.get("/test", (req, res) => {
  res.json({connection: true });
});

server.use("/feedbacks", require("./routes/feedbacks"));
server.use("/students", require("./routes/students"));
server.use("/faculties", require("./routes/faculty"));
server.use("/departments", require("./routes/departments"));
server.use("/admin", require("./routes/admin"));
