"use strict";

app.controller('bookCtrl', function($scope, GuideStorage){
	
	GuideStorage.getBooks()
		.then( (dataFromFactory) => {
			$scope.bookItems = dataFromFactory;
			$scope.$apply();
	}); 
});