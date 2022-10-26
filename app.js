import express from "express";

const app = express();

app.get("/", function (req, res) {
  res.send("Welcome Lurrr");
});
app.listen(8232, () => console.log("running in 8232"));
