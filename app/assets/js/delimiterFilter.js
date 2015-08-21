(function () {
	angular.module('libraryApp')
		.filter('delimiter', function () {
			return function (input, delimiter) {
				var filteredArray = [];

				for (var i = 0; i < input.length; i++) {
					var item = input[i];
					if (i + 1 < input.length) {
						item += delimiter;
					}
					filteredArray.push(item);

				};

				return filteredArray;
			}
		});
})();