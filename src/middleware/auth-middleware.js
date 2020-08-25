const jwt = require('jsonwebtoken');
const config = require('../config');

const checkToken = (req, res, next) => {
  // Express headers are auto converted to lowercase
  try {
    let token = req.headers['x-access-token'] || req.headers['authorization'];
    if (token.startsWith('Bearer ')) {
      // Remove Bearer from string
      token = token.slice(7, token.length);
    } else {
      return res.json({
        status: false,
        message: 'Token format not valid!'
      });
    }

    if (token) {
      jwt.verify(token, config.cypherKey, (err, decoded) => {
        if (err) {
          return res.json({
            status: false,
            message: 'Unauthorized request!'
          });
        } else {
          req.user = decoded;
          next();
        }
      });
    } else {
      return res.json({
        status: false,
        message: 'Auth token is not supplied!'
      });
    }
  } catch (error) {
    return res.json({
      status: false,
      message: 'Auth token is not supplied!'
    });
  }
};

module.exports = {
  checkToken
}
