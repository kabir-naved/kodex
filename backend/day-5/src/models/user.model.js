const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    id: Number,
  },
  {
    timestamps: true,
  },
);

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;