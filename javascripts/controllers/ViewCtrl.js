"use strict";

app.controller("ViewCtrl", function($location, $rootScope, $scope, ContactsService){
	$scope.contact = {};

	const showContacts = () => {
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
		let updatedContact = ContactsService.createContactObject(contact);
		ContactsService.updateContact(updatedContact, contact.id).then((result) => {
			showContacts();
			}).catch((error) => {
				console.log("error in switchFavorite", error);
		});
	};
	
	$scope.switchFavorite = (contact, contactId) => {
		contact.isFavorite = true;
		let updatedContact = ContactsService.createContactObject(contact);
		ContactsService.updateContact(updatedContact, contact.id).then((result) => {
			showContacts();
			}).catch((error) => {
				console.log("error in switchFavorite", error);
		});
	};



	$scope.viewDetails = (contactId) => {
		$location.path(`/contacts/detail/${contactId}`);
	};

	$scope.editContactInfo = (contactId) => {
		$location.path(`/contacts/edit/${contactId}`);
	};
	

});