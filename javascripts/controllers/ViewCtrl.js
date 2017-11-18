"use strict";

app.controller("ViewCtrl", function($rootScope, $scope, ContactsService){

	const showContacts = () => {
		console.log("in showContacts");
		ContactsService.getAllContacts($rootScope.uid).then((results) => {
			$scope.contacts = results;
			console.log("in show contacts", results);
		}).catch((error) => {
			console.log("error in show Contacts", error);
		});
	};

	$scope.deleteContact = (contactId) => {
		ContactsService.deleteMovie(contactId).then((result) =>{
			showContacts();
		}).catch((error) => {
			console.log("error in deleteContact", error);
		});
	};


	showContacts();


});