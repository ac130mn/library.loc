(function () {
	angular.module('libraryApp')
		.controller('bookDetailCtrl', ['$scope', '$routeParams', 'bookDataService', function ($scope, $routeParams, bookDataService) {
			var books;
			$scope.bookId = $routeParams.bookId;
			$scope.bookNotFound = false;
			bookDataService
				.getBooks()
				.then(function  (data) {
					books = data;
					if (books.length <= $scope.bookId) {
						$scope.bookNotFound = true;
						return;
					}
					$scope.title = books[$scope.bookId].title;
					$scope.authors = books[$scope.bookId].authors;
					$scope.price = books[$scope.bookId].price;
					$scope.description = books[$scope.bookId].description;
					$scope.img = books[$scope.bookId].img;
				});
		}]);
})();