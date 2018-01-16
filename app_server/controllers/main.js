/* GET home page */
exports.index = function(req, res){
 res.render('index', { title: 'Express' });
};


exports.reccommend_engine_setup = function(req, res){
 res.render('reccommend_engine_setup', { title: 'How to setup engine' });
};

// var express = require('express');
// var router = express.Router();
//
// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
//
// module.exports = router;
