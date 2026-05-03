const express = require("express");
const UserModel = require("./models/user.model");

const app = express();

app.use(express.json()); 

app.post("/create-user", async (req, res) => {
  try {
    const { name, email, id } = req.body;

    const newUser = await UserModel.create({
      name,
      email,
      id,
    });

    return res.status(201).json({
      message: "user created successfully",
      user: newUser,
    });
  } catch (error) {
    return res.status(500).json({
      message: "internal server error",
    });
  }
});

module.exports = app;
