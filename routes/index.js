/*
 * GET home page.
 */
exports.index = function(req, res){
 if(req.params.id){
   var indx = req.params.id;
 }else{
   var indx = 'index';
 }
  res.render('index', {
				title: ' On-line Университет Развития Личности',
				id: indx
  });
};