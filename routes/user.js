/*
 * GET users listing.
 */
exports.list = function(req, res){
  var Users = require('../models/users').Users;
  
  Users.find(function(err, users){
	console.log(users);
    res.render('users', {
				title: 'Нас уже: '+users.length,
                users: users,
    });
  });
};