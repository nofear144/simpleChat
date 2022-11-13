const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/dbFolder", () => {
  console.log("connected to db");
});
