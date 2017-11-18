"use strict";

app.controller("NewCtrl", function($location, $rootScope, $scope, ContactsService){
	$scope.contact = [];

	const createContact = (contact) => {
		return {
			"firstName": contact.firstName,
			"middleName": contact.middleName,
 			"lastName": contact.lastName,
 			"nickName": contact.nickName,
 			"address": contact.address,
 			"phoneNumber": contact.phoneNumber,
 			"birthday": contact.birthday,
 			"uid": $rootScope.uid
		};
	};


	$scope.saveNewContact = (contact) => {
		let newContact = createContact(contact);
		console.log("new contact", newContact);
		ContactsService.postNewContact(newContact).then(() => {
			$location.path("contacts/view");
		}).catch((error) => {
			console.log("error in saveNewContact", error);
		});
	};




});

