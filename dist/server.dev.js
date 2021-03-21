"use strict";

var express = require('express');

var app = express();

var path = require('path');

var port = 4000;
app.use(express["static"]("build"));
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
app.listen(port, function () {
  console.log("Example app listening at http://localhost:".concat(port));
});