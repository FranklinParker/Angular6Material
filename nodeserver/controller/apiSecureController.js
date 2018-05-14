const isLoggedIn = true;
const jwt = require('jsonwebtoken');
const User = require('../model/User').User;
const config = require('../config/config');

/**
 * secure api routes
 *
 * @param req
 * @param response
 * @param next
 */
function secureApiRoutes(req, response, next) {
  var decoded;
  console.log('secure api routes');
  const token = req.header('x-auth');
  console.log('header token', token);
  if (!token) {
    console.log('Unauthorized');
    return response.status(200).json({
      accessNotAllowed: "Not allowed"
    });
  }
  try {
    decoded = jwt.verify(token, config.secret);
    console.log('decoded', decoded);
    User.findOne({_id: decoded._id}, (err, user) => {
      if (err) {
        console.log('Unauthorized');
        response.status(200).json({
          accessNotAllowed: "Not allowed"
        });
      } else {
        console.log('user:', user);
        req.user = user;
        next();
      }
    });


  } catch (e) {
    console.log('e', e);
    response.status(200).json({
      accessNotAllowed: "Not allowed"
    });
  }

}

module.exports.secureApiRoutes = secureApiRoutes;