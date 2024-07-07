const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fristName: {
      type: String,
      trim: true,
    },

    lastName: {
      type: String,
      trim: true,
    },

    email: {
      type: String,
      trim: true,
      unique: true,
      lowercase: true,
    },

    phone: {
      type: String,
      trim: true,
    },

    age: {
      type: String,
      trim: true,
    },

    address: {
      type: String,
      trim: true,
    },

    password: {
      type: String,
      trim: true,
    },

    permanentDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    collection: "Users",
  }
);

const User = mongoose.model("User", userSchema);

module.exports = { User };
