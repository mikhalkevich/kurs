/*
 * GET home page.
 */
var User = require('../models/users').Users; 
var HttpError =require('../utils/error').HttpError;
var async = require('async');
exports.index = function(req, res){
 res.render('reg');
}

exports.send = function(req, res, next) {
  var username = req.body.username;
  var password = req.body.password; 
  User.authorize(username, password, function(err, user) {
    if (err) {
      if (err instanceof HttpError) {
        return next(new HttpError(403, err.message));
      } else {
        return next(err);
      }
    }
  	  req.session.user = user._id;
      res.send({});  
	  res.writeHead(302, {
        'Location': '/thankyoupage'
      });	
  });
};

exports.logout = function(req, res) {
  req.session.destroy();
  res.redirect('/');
};