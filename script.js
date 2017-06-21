const express = require("express");
const path = require("path");
const mustacheExpress = require("mustache-express");
const userData = require("./public/36d3402e-data.js")

const app = express();

// app.use('/styles', express.static(path.join(__dirname, "/public"))
app.engine("mustache", mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')

app.use('/css', express.static('public'))


app.get("/users/", function(req, res) {
  res.render("users", {
    users: userData.users
  })
});

app.get("/user/:id", function(req, res) {
  let id = req.params.id;
  let user = userData.users[id];
  res.render("user", {
    users: userData.users[id]
  })
});

app.listen(3000, function() {
  console.log("Successfully started express application")
});




// const express = require('express');
// const path = require('path');
// const mustacheExpress = require('mustache-express');
//
// const app = express();
//
// app.engine('mustache', mustacheExpress());
// app.set('views', './views')
// app.set('view engine', 'mustache')
//
// const list = [
// {item:"learn node basics", completed: true},
// {item:"learn express basics", completed: true},
// {item:"learn mustache", completed: true},
// {item:"learn about HTML forms with EXPRESS", completed: false}];
//
// app.get('/todo/', function (req, res) {
//   res.render('todo', {list:list})
// })
//
// app.listen(3000, function () {
//   console.log('Successfully started express application!');
// })
