const jwt = require('jsonwebtoken');
const User = require('../model/User').User;
const config = require('../config/config');

/**
 * secure api routes, insure a token exists before
 *
 * @param req
 * @param response
 * @param next
 */
function secureApiRoutes(req, response, next) {
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
      if (err) {
        response.status(401).json({
          accessNotAllowed: "Not allowed"
        });
      } else {
        req.user = user;
        next();
      }
    });
  } catch (e) {
    console.log('e', e);
    response.status(401).json({
      accessNotAllowed: "Not allowed"
    });
  }

}

module.exports.secureApiRoutes = secureApiRoutes;