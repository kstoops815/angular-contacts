"use strict";

app.controller("FavoritesCtrl", function($rootScope, $scope, ContactsService){


	const showContacts = () => {
		console.log("in showContacts");
		ContactsService.getAllContacts($rootScope.uid).then((results) => {
			$scope.contacts = results;
		}).catch((error) => {
			console.log("error in show Contacts", error);
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

	








});