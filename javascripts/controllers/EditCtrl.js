"use strict";

app.controller("EditCtrl", function($location, $routeParams, $scope, ContactsService) {

  const getContactInfo = () => {
    ContactsService.getSingleContact($routeParams.id).then((results) => {
      $scope.contact = results.data;
      console.log("single contact", $scope.contact);
    }).catch((error) => {
      console.log("error in getSingleMovie", error);
    });
  };

  getContactInfo();

  $scope.editContact = (contact, contactId) => {
		let contactToEdit = ContactsService.createContactObject(contact);
		console.log("contactToEdit", contactToEdit);
		ContactsService.updateContact(contactToEdit).then(() => {
			$location.path("contacts/view");
		}).catch((error) => {
			console.log("error in editContact", error);
		});
	};


});