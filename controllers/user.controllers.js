const { User } = require("../models/user.model");

exports.register = async (req, res) => {
  try {
    let {
      fristName,
      lastName,
      email,
      phone,
      age,
      address,
      password,
      confirmPassword,
    } = req.body;

    let missingFields = "";
    for (const key of Object.keys(req.body)) {
      if (!req.body[key]) {
        missingFields += `${key}, `;
      }
    }

    if (missingFields.length > 0) {
      return res.status(400).json({
        success: false,
        message: `Please enter ${missingFields}`,
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    email = email.toLowerCase();

    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email foramt",
      });
    }

    const findEmail = await User.findOne({ email });

    if (findEmail) {
      return res.status(409).json({
        success: false,
        message: "Email already taken",
      });
    }

    if (phone.length !== 11) {
      return res.status(400).json({
        success: false,
        message: "Pleasee enter 11 digit number",
      });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Password not match",
      });
    }

    if (password.length < 8) {
      return res.status(400).json({
        success: false,
        message: "Password length must be 8",
      });
    }

    const newUser = await User.create({
      fristName,
      lastName,
      email,
      phone,
      age,
      address,
      password,
      confirmPassword,
    });

    return res.status(200).json({
      success: true,
      message: "User register successfully",
      user: newUser,
    });
  } catch (error) {
    console.error("Error in registeration: ", error);
    return res.status(500).json({
      success: false,
      message: "An error accurred while registeration",
    });
  }
};
