var path = require('path'),
    fs = require('fs');

var Usertexts = require('../models/usertexts').usertexts;
exports.cabinet = function(req, res, next) {
 congif = require('../config');
 scripts = congif.get("scripts");
 scripts[3] = '/ckeditor/ckeditor.js';
 res.render('cabinet', {
   scripts: scripts
  });
};



exports.send = function(req, res, next){
// загрузка фотов
	fs.readFile(req.files.book.path, function (err, data) {

		var imageName = req.files.book.name

		// If there's an error
		if(!imageName){

			console.log("There was an error")
			res.redirect("/");
			res.end();

		} else {

		  var newPath = __dirname + "/../public/uploads/" + imageName;
console.log(newPath);
		  // write file to uploads/fullsize folder
		  fs.writeFile(newPath, data, function (err) {

		  	// let's see it
		  	res.redirect("/uploads/" + imageName);

		  });
		}
	});


//
switch (req.body.options) {
   case 'statia':
      body = req.body.editor1;
      break;
   case 'book':
      body = req.body.book;
      break;
   case 'audio':
      body = req.body.audio;
      break;
   case 'video':
      body = req.body.videotext;
      break;
   case 'pic':
      body = req.body.pic;
      break;
   case 'link':
      body = req.body.link;
      break;
   case 'reklama':
      body = req.body.reklama;
      break;
   default:
      body = '';
      break;
}

var useradds = new Usertexts({
 name: req.body.name,
 optionblock: req.body.options,
 body: body,
 userid:req.session.user
});
useradds.save(function(err, user, affected){
	 res.redirect('/');
});
}