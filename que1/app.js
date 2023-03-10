const express = require("express");
const app = express();

app.listen(5000, () => {
  console.log("Application started and Listening on port 5000");
});



app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});




app.post("/", (req, res) => {
    res.send("You are Login");
  });
