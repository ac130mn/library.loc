(function () {
	angular.module('libraryApp')
		.controller('registrationCtrl', ['$scope', function ($scope) {
			$scope.checkPasswords = function  () {
				return ($scope.password_1 === $scope.password_2);
			};
			
		}]);
})();