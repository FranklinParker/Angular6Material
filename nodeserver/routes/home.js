var express = require('express');

const router = express.Router();
const homePageDataController = require('../controller/homePageDataController');


router.get('/', async (req, res)=> {
  homePageDataController.getHomePageMessages(req, res);

});


module.exports = router;