(function(){
	angular.module('libraryApp')
		.service('bookDataService', ['$http', '$q', function ($http, $q) {
			var books;
			this.getBooks = function () {
				var defer = $q.defer();
				$http.get('book/data.json')
					.success(function (response) {
						books = response;
						defer.resolve(response);
					})
					.error(function (err, status) {
						defer.reject(err);
					});

				return defer.promise;
			};

		}]);
})();