"use strict";

app.controller("NewCtrl", function($location, $rootScope, $scope, ContactsService){
	$scope.contact = [];

	$scope.saveNewContact = (contact) => {
		let newContact = ContactsService.createContactObject(contact);
		ContactsService.postContact(newContact).then(() => {
			$location.path("contacts/view");
		}).catch((error) => {
			console.log("error in saveNewContact", error);
		});
	};
});

