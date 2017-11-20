"use strict";

app.controller("ViewCtrl", function($rootScope, $scope, ContactsService){
	$scope.contact = {};

	const showContacts = () => {
		console.log("in showContacts");
		ContactsService.getAllContacts($rootScope.uid).then((results) => {
			$scope.contacts = results;
		}).catch((error) => {
			console.log("error in show Contacts", error);
		});
	};

	showContacts();

	$scope.deleteContact = (contactId) => {
		ContactsService.deleteContact(contactId).then((result) =>{
			showContacts();
		}).catch((error) => {
			console.log("error in deleteContact", error);
		});
	};


	$scope.favoriteChange = (contact, contactId) => {
		if(contact.isFavorite) {
			contact.isFavorite = false;
		} else {(contact.isFavorite = true);
			// let updatedContact = ContactsService.createContactObject(contact);
			// console.log("updated contact", updatedContact);
			// ContactsService.updateContact(updatedContact).then((results) => {
			// 	showContacts();
			// }).catch((error) => {
			// 	console.log("error in updatedContact", error);
			// });
		}
	};

	// $scope.favoriteChange = (contact, contactId) => {
	// 	console.log("in favoriteChange");
	// 	ContactsService.getAllContacts($rootScope.uid).then((results) => {
	// 		console.log("results", results);
	// 		$scope.contact = results;
	// 		console.log("scope.contact", $scope.contact);
	// 		if(contact.isFavorite === true) {
	// 			contact.isFavorite = false;
	// 			} else {
	// 				contact.isFavorite = true;
	// 			}
	// 			let updatedContact = ContactsService.createContactObject(contact);
	// 			console.log("updated contact", updatedContact);
	// 			ContactsService.updateContact(updatedContact).then((results) => {
	// 				showContacts();
	// 	}).catch((error) => {
	// 			console.log("error in updatedContact", error);
	// 	});
	// 	});
	// };


});