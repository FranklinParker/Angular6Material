const apiSecureController = require('../controller/apiSecureController');
const contactViewController = require('../controller/contactViewController');

function configureUnprotectedRoutes(app){
    app.get('/api/contacts', contactViewController.viewAllContacts);
   // app.use('/user', require('./users'));

}
module.exports.configureUnprotectedRoutes = configureUnprotectedRoutes;

var allowDelete = function(req, res, next){
    res.append('Access-Control-Allow-Methods', 'DELETE');
    next();
}


configureProtectedRoutes = (app)=>{
    app.use('/api',allowDelete, apiSecureController.secureApiRoutes);
   // app.use('/api/admin/course',allowDelete, course );

}

module.exports.configureProtectedRoutes = configureProtectedRoutes;



