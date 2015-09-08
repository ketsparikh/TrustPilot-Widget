var app = angular.module("switchableGrid", ['ngResource']);

app.factory('reviewsFile', function($http){

	return {
		fetchPopular: function(callback){

			$http.get('reviews.json').success(function(data) {
				callback(data);
			});
		}
	}

});

function SwitchableGridController($scope, reviewsFile){

	$scope.userData = [];
	$scope.layout = 'list';
	$scope.avgRating = '';
	$scope.totalReviews = '';

	reviewsFile.fetchPopular(function(data){
		$scope.userData = data;
		$scope.totalReviews = data.length;
		var total = 0;
		for(var key in data) {
			total += parseInt(data[key].starRating);
		}
		$scope.avgRating = (total/data.length).toFixed(1);
	});
}
