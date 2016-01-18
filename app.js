var app = angular.module('flapperNews', ['ui.router'])

app.factory('posts', [function(){
	var o = {
		posts: [  {title:"Cat", 
				link: "http://www.cat.com",
				upvotes:0,
				comments:[
				{author: "Bob", body: "Cool", upvotes: 0}, 
				{author: "Caty", body: "Grool", upvotes:0}]
},
		{title:"Cat5", 
				link: "http://www.cat.com",
				upvotes:0,
				comments:[
				{author: "Bob", body: "Cool", upvotes: 0}, 
				{author: "Caty", body: "Grool", upvotes:0}]
},
		{title:"Cat4", 
				link: "http://www.cat.com",
				upvotes:0,
				comments:[
				{author: "Bob", body: "Cool", upvotes: 0}, 
				{author: "Caty", body: "Grool", upvotes:0}]
},
		{title:"Cat3", 
				link: "http://www.cat.com",
				upvotes:0,
				comments:[
				{author: "Bob", body: "Cool", upvotes: 0}, 
				{author: "Caty", body: "Grool", upvotes:0}]
},
		{title:"Cat2", 
				link: "http://www.cat.com",
				upvotes:0,
				comments:[
				{author: "Bob", body: "Cool", upvotes: 0}, 
				{author: "Caty", body: "Grool", upvotes:0}]
}]
	};
	return o;
}]);

app.config([
	'$stateProvider',
	'$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {

		$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: '/home.html',
			controller: 'MainCtrl'
		});
		$stateProvider
		.state('posts',{
			url: '/posts/{id}',
			templateUrl: '/posts.html',
			controller:"PostsCtrl"
		});


		$urlRouterProvider.otherwise('home');
	}]);

app.controller("PostsCtrl",[
	"$scope",
	"$stateParams",
	"posts",
	function($scope, $stateParams, posts){
		$scope.post = posts.posts[$stateParams.id];
		$scope.addComment = function(){
			if($scope.body==='') { alert("You need a body");
			return; }
			$scope.post.comments.push({
				body: $scope.body,
				author: 'user',
				upvotes: 0
			});
			$scope.body = '';
		};
		$scope.incrementPost=function(thing){
			thing.upvotes++;
		}
	}

	]);
app.controller('MainCtrl',[
	'$scope',
	'posts',
	function($scope,posts){
		$scope.posts = posts.posts;

		$scope.test= 'Node Reddit';
		$scope.addPost=function(){
			if(!$scope.title || $scope.title === '') { alert("You need a title");
			return; }
			$scope.posts.push({
				title:$scope.title, 
				link: $scope.link,
				upvotes:0,
				comments:[
				{author: "Bob", body: "Cool", upvotes: 0}, 
				{author: "Caty", body: "Grool", upvotes:0}]

			});
			$scope.title="";
			$scope.link = '';
		}
		$scope.incrementPost=function(thing){
			thing.upvotes++;
		}
	}
	]);

