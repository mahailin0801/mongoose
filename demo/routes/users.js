var express = require('express');
var router = express.Router();
const userControl = require("../Control/userControl");
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


//注册
router.post("/register",userControl.regData);

//登录
router.post("/login",userControl.logData);

module.exports = router;
