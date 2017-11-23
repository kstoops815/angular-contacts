"use strict";

app.controller("ViewCtrl", function($location, $rootScope, $scope, ContactsService){
	$scope.contact = {};

	$scope.$on('$viewContentLoaded', function(event){
    console.log('content loaded!');
  });

	const showContacts = () => {
		ContactsService.getAllContacts($rootScope.uid).then((results) => {
			$scope.contacts = results;
			console.log("showContacts", results);
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

	
	
	$scope.switchFavorite = (contact, contactId) => {
		contact.isFavorite = !contact.isFavorite;
		let updatedContact = ContactsService.createContactObject(contact);
		ContactsService.updateContact(updatedContact, contact.id).then((result) => {
			showContacts();
			}).catch((error) => {
				console.log("error in switchFavorite", error);
		});
	};

	$scope.toggleSuper = (contact) => {
		console.log("contacts in makeSuper", contact);
		contact.isSuper = !contact.isSuper;
		console.log("contact isSuper", contact.isSuper);
		let updatedContact = ContactsService.createContactObject(contact);
		ContactsService.updateContact(updatedContact, contact.id).then((result) => {
			showContacts();
		}).catch((error) => {
			console.log("error in isSuper", error);
		});
	};

	

	$scope.viewDetails = (contactId) => {
		$location.path(`/contacts/detail/${contactId}`);
	};

	$scope.editContactInfo = (contactId) => {
		$location.path(`/contacts/edit/${contactId}`);
	};
	

});