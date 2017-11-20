"use strict";

app.controller("ViewCtrl", function($location, $rootScope, $scope, ContactsService){
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

	$scope.unFavorite = (contact, contactId) => {
		contact.isFavorite = false;
		console.log("is favorite?", contact.isFavorite);
		let updatedContact = ContactsService.createContactObject(contact);
		ContactsService.updateContact(updatedContact, contact.id).then((result) => {
			showContacts();
			}).catch((error) => {
				console.log("error in switchFavorite", error);
		});
	};

	// $scope.favoriteChange = (contact, contactId) => {
	// 	if(!contact.isFavorite) {
	// 		contact.isFavorite = true;
	// 	} else {
	// 		contact.isFavorite = false;
	// 	}
	// 	let updatedContact = ContactsService.createContactObject(contact);
	// 	// ContactsService.updateContact(updatedContact, contactId).then((result) => {
	// 	// 	showContacts();
		
	// };
	
	$scope.switchFavorite = (contact, contactId) => {
		contact.isFavorite = true;
		let updatedContact = ContactsService.createContactObject(contact);
		ContactsService.updateContact(updatedContact, contact.id).then((result) => {
			showContacts();
			}).catch((error) => {
				console.log("error in switchFavorite", error);
		});
	};


	

});