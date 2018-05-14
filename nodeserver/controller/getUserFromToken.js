const jwt = require('jsonwebtoken');
const User = require('../model/User').User;
const config = require('../config/config');

/**
 * try to load user from token
 *
 * @param req
 * @param response
 * @param next
 */
const getUserFromToken = (req, response, next) => {
  var decoded;
  const token = req.header('x-auth');
  if (!token) {
    return response.status(200).json({
      accessNotAllowed: "Not allowed"
    });
  }
  try {
    decoded = jwt.verify(token, config.secret);
    User.findOne({_id: decoded._id}, (err, user) => {
      if (err || !user) {
        response.status(200).json({
          success:false,
          message: 'no user found'
        });
      } else {
        response.status(200).json({
          success:true,
          user: user
        });
      }
    });
  } catch (e) {
    console.log('e', e);
    response.status(200).json({
      success:false,
      message: 'no user found'
    });
  }

}

module.exports.getUserFromToken = getUserFromToken;