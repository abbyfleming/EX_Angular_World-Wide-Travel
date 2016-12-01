"use strict";
console.log("guideFactory.js");

//The goal of the factory is to only grab the data.

app.factory("GuideStorage", () =>{

	let bookItems = []; //data from promise

	function getBooks(){
		return new Promise((resolve, reject) => {
			$.ajax({
				url: `../data/guides.json`,
			}).done(function(data) {
				resolve(data.guides);
				bookItems.push(data.guides); 
			}).fail((error) => {
				reject(error);
			});
		});
	}

return {getBooks};

});
