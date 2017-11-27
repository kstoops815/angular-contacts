"use strict";

app.controller("EditCtrl", function($location, $routeParams, $scope, ContactsService) {

  const getContactInfo = () => {
    ContactsService.getSingleContact($routeParams.id).then((results) => {
      $scope.contact = results.data;
    }).catch((error) => {
      console.log("error in getSingleMovie", error);
    });
  };

  getContactInfo();

  $scope.editContact = (contact, contactId) => {
		let contactToEdit = ContactsService.createContactObject(contact);
		ContactsService.updateContact(contactToEdit, $routeParams.id).then(() => {
			$location.path("contacts/view");
		}).catch((error) => {
			console.log("error in editContact", error);
		});
	};
});