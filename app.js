var app = angular.module("flapperNews",[]);
app.controller('MainCtrl',[
	'$scope',
	function($scope){
		$scope.posts = [
  'post 1',
  'post 2',
  'post 3',
  'post 4',
  'post 5'
];
		$scope.test= 'Hello World';
	}
	]);
