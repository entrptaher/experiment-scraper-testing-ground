const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "css")));
app.use(express.static(path.join(__dirname, "img")));
app.use(express.static(path.join(__dirname, "html")));

app.post("/login", function(req, res) {
  //res.end(JSON.stringify(req.body));
  if (req.body.username == 'admin' && req.body.password == '12345') {
    res.redirect('/welCome.html');
  } else {
    res.redirect('/failed.html');
  }
});

app.listen(1337, function() {
  console.log("Backend is running at Port 1337");
});
