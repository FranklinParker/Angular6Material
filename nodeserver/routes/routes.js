const apiSecureController = require('../controller/apiSecureController');
const contactViewController = require('../controller/contactViewController');
const home = require('./home');

function configureUnprotectedRoutes(app){
    app.get('/api/contacts', contactViewController.viewAllContacts);
   // app.use('/user', require('./users'));

}
module.exports.configureUnprotectedRoutes = configureUnprotectedRoutes;

var allowDelete = function(req, res, next){
    res.append('Access-Control-Allow-Methods', 'DELETE');
    next();
}

/***
 * maps routes that
 *
 *
 * @param app
 */

configureProtectedRoutes = (app)=>{
    app.use('/api',allowDelete, apiSecureController.secureApiRoutes);
    app.use('/api/home', home);
   // app.use('/api/admin/course',allowDelete, course );

}


module.exports.configureProtectedRoutes = configureProtectedRoutes;



