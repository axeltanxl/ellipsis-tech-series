const config = require('./config');
const jwt = require('jsonwebtoken');

const ACCESS_TOKEN_SECRET = config.ACCESS_TOKEN_SECRET;

const authenticateToken = async (req, res, next) => {
  try {
    const authHeader = req.headers['authorization'];

    // get token from request header
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) return res.status(400).json({ error: "No JWT provided!" });
    
    const user = jwt.verify(token, ACCESS_TOKEN_SECRET);
    
    req.user = user;
    next();
  } catch (err) {
    console.error(err);
    return res.status(400).json({ message: "Failed to verify JWT token!" });
  } 
}

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'Unknown endpoint' })
}

const errorHandler = (error, request, response, next) => {
  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'Malformatted id' })
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message })
  }

  next(error)
}

module.exports = {
  authenticateToken,
  unknownEndpoint,
  errorHandler
}