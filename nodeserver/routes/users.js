var express = require('express');
var router = express.Router();


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

module.exports = router;
