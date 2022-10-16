/*
   File name: users.js
   Stu name: Huyen Anh Phan
   Stu #: 301216123
   Date: 10/16/22
*/
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
