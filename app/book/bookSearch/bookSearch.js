(function () {
	angular.module('libraryApp')
		.controller('bookSearchCtrl', ['$scope', 'bookDataService', function ($scope, bookDataService) {
			bookDataService.getBooks().then(function(data) {
				$scope.books = data;
			});

			$scope.sortColumn = 'title';


			$scope.toggleSort = function (column) {
				if (column === $scope.sortColumn) {
					$scope.sortColumn = '-' + $scope.sortColumn;
					return;
				}

				$scope.sortColumn = column;
			};	
		}]);
})();