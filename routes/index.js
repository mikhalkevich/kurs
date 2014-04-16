/*
 * GET home page.
 */

exports.index = function(req, res){
    if(req.params.id){
        var indx = req.params.id;
    }else{
        var indx = 'index';
    }
    var Themas = require('../models/themas').Themas;
    Themas.find(function(err, info){
        var Maintexts = require('../models/maintexts').maintexts;
        Maintexts.findOne({'url':indx}, function(err, ttext){
           if(!ttext){
               ttext = {
                   name:'Добро пожаловать на сайт',
                   body:'<b>Извините</b>, страница не найдена'
               }
           }
           res.render('index', {
				title: ' On-line Университет Развития Личности',
                info: info,
				ttext: ttext
       });
     });
  });
};
exports.feedback = function(req, res){
 res.render('feedback');
}