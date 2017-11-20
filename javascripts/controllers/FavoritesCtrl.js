"use strict";

app.controller("FavoritesCtrl", function($rootScope, $scope, ContactsService){


	const showContacts = () => {
		console.log("in showContacts");
		ContactsService.getFavoriteContacts($rootScope.uid).then((results) => {
			$scope.contacts = results;
			console.log("showCOntacts", results);
		}).catch((error) => {
			console.log("error in show Contacts", error);
		});
	};

	showContacts();
	
	$scope.unFavorite = (contact, contactId) => {
		contact.isFavorite = false;
		let updatedContact = ContactsService.createContactObject(contact);
		ContactsService.updateContact(updatedContact, contact.id).then((result) => {
			showContacts();
			}).catch((error) => {
				console.log("error in switchFavorite", error);
		});
	};








});