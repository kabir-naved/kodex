// create server
//configuration

const express = require("express");

const app = express();

app.use(express.json());

let users = [];

app.post("/users", (req, res) => {
  users.push(req.body);
  console.log(users);
  return res.status(201).json({
    message: "users created succesfully",
  });
});

app.get("/get-users", (req, res) => {
  return res.status(200).json({
    message: "users fetch succesfully",
    users: users,
  });
});

app.patch("/get-users/update/:index", (req, res) => {
  let { index } = req.params;
  let { age } = req.body;

  users[index].age = age;
  return res.send("ok");
});

app.delete("/get-users/update/:index", (req, res) => {
  let { index } = req.params;

  users.splice(index, 1)
  return res.status(200).json({
    message: "users deleted succesfully",
  });
});

module.exports = app;
