"use strict";

app.controller("FavoritesCtrl", function($location, $rootScope, $scope, ContactsService){


	const showContacts = () => {
		ContactsService.getFavoriteContacts($rootScope.uid).then((results) => {
			$scope.contacts = results;
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

	$scope.viewDetails = (contactId) => {
		$location.path(`/contacts/details/${contactId}`);
	};

	$scope.editContactInfo = (contactId) => {
		$location.path(`/contacts/edit/${contactId}`);
	};







});