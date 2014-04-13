var Users = require('./models/users').Users;
var users = new Users({
 username: 'Vasya3011',
 password: '12345001'
});
users.save(function(err, user, affected){
     console.log(arguments);
});