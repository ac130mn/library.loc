(function  () {
	var libraryApp = angular.module('libraryApp', ['ngRoute']);


	libraryApp.config(['$routeProvider', function ($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'home/assets/home.html',
				controller: 'homeCtrl'
			})
			.when('/info', {
				templateUrl: 'info/assets/info.html',
				controller: 'infoCtrl'
			})
			.when('/book/:bookId', {
				templateUrl: 'book/bookDetail/assets/bookDetail.html',
				controller: 'bookDetailCtrl'
			})
			.when('/search', {
				templateUrl: 'book/bookSearch/assets/bookSearch.html',
				controller: 'bookSearchCtrl'
			})
			.when('/registration', {
				templateUrl: 'registration/assets/registration.html',
				controller: 'registrationCtrl'
			})
			.otherwise({ 
				redirectTo: '/' 
			});
	}]);



	libraryApp.controller('libraryCtrl', ['$scope', function ($scope) {
		
	}]);


})();