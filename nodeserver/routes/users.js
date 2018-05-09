var express = require('express');
var router = express.Router();
const User = require('../model/User').User;


router.post('/login', function (req, res) {
    const user = req.body;
    console.log('login - user', user);
    console.log('Session: ' + JSON.stringify(req.session,null,2));

    req.user = user;
    res.status(200).json({
        success: true,
        user: user
    });
});


router.post('/register', function (req, res) {
  const user = req.body;
  console.log('user registered - user', user);
  const userModel = new User({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    password: user.password
  });
  userModel.save()
    .then((doc)=> {

      res.status(200).json({
        success: true,
        user: user
      })
    }, (err)=>{
      console.log('err saving', err);
      res.status(401).json({
        success: false,
        message: err.toString()
      });
    });


});

module.exports = router;
