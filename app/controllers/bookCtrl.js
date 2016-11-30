"use strict";

console.log("bookCtrl.js");

app.controller('bookCtrl', function($scope){
	
$scope.bookItems = []; //data from promise

function getBooks(){
	return new Promise((resolve, reject) => {
		$.ajax({
			url: `../data/guides.json`,
		}).done(function(data) {
			resolve(data.guides);
		}).fail((error) => {
			reject(error);
		});
	});
}

getBooks()
	.then(data => {
		console.log(data);
		$scope.bookItems = data;
		$scope.$apply();
		console.log($scope.bookItems);
	});
});