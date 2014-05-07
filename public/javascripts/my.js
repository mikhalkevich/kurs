angular.module('plunker', ['ui.bootstrap']);
function AccordionDemoCtrl($scope) {
  $scope.oneAtATime = true;
}

function HeaderController($scope) {
    $scope.reklamaText = 'hide';  
    $scope.linkText = 'hide';
    $scope.statiaText = 'hide';
    $scope.bookText = 'hide';
	$scope.audioText = 'hide';
    $scope.videoText = 'hide';	
	$scope.picText = 'hide';
  $scope.reklama = function() {
    $scope.reklamaText = 'show';  
    $scope.linkText = 'hide';
    $scope.statiaText = 'hide';
    $scope.bookText = 'hide';
	$scope.audioText = 'hide';
    $scope.videoText = 'hide';	
	$scope.picText = 'hide';
  };
  $scope.link = function() {
    $scope.linkText = 'show';
    $scope.statiaText = 'hide';
    $scope.reklamaText = 'hide';
    $scope.bookText = 'hide';
	$scope.audioText = 'hide';
    $scope.videoText = 'hide';	
	$scope.picText = 'hide';
  };
  $scope.statia = function() {
    $scope.statiaText = 'show';
    $scope.reklamaText = 'hide';
    $scope.linkText = 'hide';
    $scope.bookText = 'hide';
	$scope.audioText = 'hide';
    $scope.videoText = 'hide';	
	$scope.picText = 'hide';
  };
  $scope.book = function() {
    $scope.bookText = 'show';
    $scope.statiaText = 'hide';
    $scope.reklamaText = 'hide';
    $scope.linkText = 'hide';
    $scope.audioText = 'hide';
    $scope.videoText = 'hide';	
	$scope.picText = 'hide';
  };
  $scope.audio = function() {
    $scope.audioText = 'show';
    $scope.bookText = 'hide';
    $scope.statiaText = 'hide';
    $scope.reklamaText = 'hide';
    $scope.linkText = 'hide';
    $scope.videoText = 'hide';
    $scope.picText = 'hide';	
  };
  $scope.video = function() {
    $scope.videoText = 'show';
    $scope.audioText = 'hide';
    $scope.bookText = 'hide';
    $scope.statiaText = 'hide';
    $scope.reklamaText = 'hide';
    $scope.linkText = 'hide';
	$scope.picText = 'hide';
  };
  $scope.pic = function() {
    $scope.picText = 'show';
    $scope.videoText = 'hide';
    $scope.audioText = 'hide';
    $scope.bookText = 'hide';
    $scope.statiaText = 'hide';
    $scope.reklamaText = 'hide';
    $scope.linkText = 'hide';
  };
}
