var express = require('express');
var router = express.Router();
var Users = require('../models/user.model');
/* GET users listing. */
router.get('/login', function(req, res, next) {
  // router.post(req, res, next);
}).post('/login', function(req, res, next){
  console.log(req.param('passwd')+'====='+req.param('loginId'));
  var loginId = req.param('loginId');
  var passwd = req.param('passwd');
  Users.get(loginId)
  .then(function(user){
      console.log('+++++++'+user);
   if(user){
     console.log(user);
       return user;
   }
  });
});

module.exports = router;
