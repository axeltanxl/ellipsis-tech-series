const User = require('../models/user');
const config = require('../utils/config');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

const ACCESS_TOKEN_SECRET = config.ACCESS_TOKEN_SECRET;
const EXPIRY = config.EXPIRY;

const register = async (req, res) => {
  const { name, email, password, confirmPassword, height, weight } = req.body;
  
  try {
    //check if email already exists
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res.status(400).json({ message: "Email address has already been taken!" });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords dont match!"});
    }

    //create salt
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    //create entry
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      height,
      weight
    })
    
    const userToSign = {
      user_id: user.toJSON().id,
      name,
      email
    }

    const accessToken = jwt.sign(userToSign, ACCESS_TOKEN_SECRET, { expiresIn: EXPIRY })

    return res.status(201).json({ user, accessToken });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: err });
  }
}

const login = async (req, res) => {
  //TODO
}

module.exports = { register, login };