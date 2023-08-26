const user = require('../models/user');
const User = require('../models/user');
const config = require('../utils/config');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

const ACCESS_TOKEN_SECRET = config.ACCESS_TOKEN_SECRET;
const EXPIRY = config.EXPIRY;

const register = async (req, res) => {
  const { name, email, password, age, height, weight, activityLevel, isCKD } = req.body;
  
  try {
    //check if email already exists
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res.status(400).json({ message: "Email address has already been taken!" });
    }

    //create salt
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    //create entry
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      age,
      height,
      weight,
      activityLevel,
      isCKD
    })
    
    const userToSign = {
      id: user.toJSON().id,
      name,
      email
    }

    const accessToken = jwt.sign(userToSign, ACCESS_TOKEN_SECRET, { expiresIn: EXPIRY });

    return res.status(201).json({ user, accessToken });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: err });
  }
}

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(401).json({ message: "Your email/password is incorrect." });
    }

    // email valid -> compare password with bcrypt
    if (!(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: "Your email/password is incorrect." });
    }

    const userToSign = {
      id: user.toJSON().id,
      name: user.name,
      email
    }

    const accessToken = jwt.sign(userToSign, ACCESS_TOKEN_SECRET, { expiresIn: EXPIRY })

    return res.status(200).json({
      message: "Successfully logged in!", user, accessToken
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: err });
  }
}

module.exports = { register, login };