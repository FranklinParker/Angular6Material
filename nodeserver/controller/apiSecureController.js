
const isLoggedIn = true;
const jwt = require('jsonwebtoken');
const User = require('../model/User');
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
  var token = req.header('x-auth');
  try {
    decoded = jwt.verify(token, config.secret);
    console.log('decoded',decoded);
    User.findById(decoded._id)
      .then((user)=> {
        console.log('user:',user);
        req.user = user;
        next();
      },(err)=>{
        console.log('Unauthorized');
        response.status(200).json({
          accessNotAllowed: "Not allowed"
        });
      });


  } catch (e) {
    response.status(200).json({
      accessNotAllowed: "Not allowed"
    });
  }
  if (isLoggedIn) {
    next();
  } else {

  }
}

module.exports.secureApiRoutes = secureApiRoutes;