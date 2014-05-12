exports.index = function(req, res, next) {
 congif = require('../config');
 scripts = congif.get("scripts");
 scripts[3] = '/vendor/bower_components/jquery/jquery.js';

  res.render('chat', {
   scripts: scripts
  });
};