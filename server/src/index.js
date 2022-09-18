const express = require("express");
const cors = require("cors")
const app = express();

app.use(cors())

app.get("/", (req, res) => {
  res.json({
    message: "Hello World!!!!!",
  });
});

app.listen(5000, () => {
  console.log("server hosted on port 5000");
});
