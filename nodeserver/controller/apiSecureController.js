const isLoggedIn = true;

/**
 * secure api routes
 *
 * @param req
 * @param response
 * @param next
 */
function secureApiRoutes(req, response, next) {
  if (isLoggedIn) {
    next();
  } else {
    response.status(200).json({
      accessNotAllowed: "Not allowed"
    });
  }
}

module.exports.secureApiRoutes = secureApiRoutes;