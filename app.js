var app = angular.module('app', []);

app.controller('myCtrl', ['$scope', function($scope){
	$scope.submit = function(){
		$scope.messages.push($scope.newPost);
		$scope.newPost = {};
	};

	$scope.messages = [
		{
			author: 'red',
			body: 'This is some filler text. Text text text.'
		}
	];

}]);
