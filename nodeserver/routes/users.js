var express = require('express');
var router = express.Router();
const User = require('../model/User').User;
const findUserConfirmPassword = require('../model/User').findUserConfirmPassword;


router.post('/login', async (req, res)=> {
    const user = req.body;
    try{
      const userRec = await findUserConfirmPassword(user.email,user.password);
      console.log('userRec', userRec);
      res.status(200).json({
        success: true,
        user: userRec
      });
    }catch(e){
      console.log('error', e);
      res.status(401).json({
        success: false,
        message: e
      });
    }


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
