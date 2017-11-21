"use strict";

app.controller("ContactDetailCtrl", function($routeParams, $scope, ContactsService) {
  $scope.contact = {};

  const getContact = () => {
    ContactsService.getSingleContact($routeParams.id).then((results) => {
      $scope.contact = results.data;
      console.log("single contact", $scope.contact);
    }).catch((error) => {
      console.log("error in getSingleMovie", error);
    });
  };

  getContact();


  $scope.unFavorite = (contact, contactId) => {
		contact.isFavorite = false;
		console.log("is favorite?", contact.isFavorite);
		let updatedContact = ContactsService.createContactObject(contact);
		ContactsService.updateContact(updatedContact, $routeParams.id).then((result) => {
			getContact();
			}).catch((error) => {
				console.log("error in switchFavorite", error);
		});
	};
	
	$scope.switchFavorite = (contact, contactId) => {
		contact.isFavorite = true;
		let updatedContact = ContactsService.createContactObject(contact);
		ContactsService.updateContact(updatedContact, $routeParams.id).then((result) => {
			getContact();
			}).catch((error) => {
				console.log("error in switchFavorite", error);
		});
	};







});