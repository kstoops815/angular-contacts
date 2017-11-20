"use strict";

app.controller("NewCtrl", function($location, $rootScope, $scope, ContactsService){
	$scope.contact = [];

	


	$scope.saveNewContact = (contact) => {
		let newContact = ContactsService.createContact(contact);
		console.log("new contact", newContact);
		ContactsService.postNewContact(newContact).then(() => {
			$location.path("contacts/view");
		}).catch((error) => {
			console.log("error in saveNewContact", error);
		});
	};




});

