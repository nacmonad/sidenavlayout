var app = angular.module('myApp', ['ngAnimate', 'ui.router','uiRouterStyles']);

//front end routing configurations
app.config(['$urlRouterProvider','$stateProvider', function($urlRouterProvider,$stateProvider){
		$urlRouterProvider.otherwise('/home');

		$stateProvider
			.state('home', {
				url: '/home', 
				templateUrl: 'partials/home.html',  //serves to ng-view
				controller: 'myHomeController',
				data: {
					css: 'css/home.css'
				}
			})
			.state('blog', { 	
				url: '/blog',
				templateUrl: 'partials/blog.html',
				controller: 'myBlogController',
				data: {
					css: 'css/custom.css'
				}
			})
	}]);


