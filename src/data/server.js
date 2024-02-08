const express = require("express"); // for the server
const bodyParser = require("body-parser"); // for parsing and reading json data
const cors = require("cors");

const server = express(); // starting the server

server.use(bodyParser.json()); // using the body-parser
server.use(cors()); // using cors to prevent the cors error

const port = 5000;
server.listen(port, () => {
  console.log("server started at localhost " + port);
});

server.use("/feedbacks", require("./routes/feedbacks"));
server.use("/students", require("./routes/students"));
