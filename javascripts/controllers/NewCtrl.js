"use strict";

app.controller("NewCtrl", function($location, $rootScope, $scope, ContactsService){
	$scope.contact = [];

	const createContact = (contact) => {
		return {
			"firstName": contact.firstName,
			"middleName": contact.middleName,
 			"lastName": contact.lastName,
 			"nickName": contact.nickName,
 			"address": contact.address,
 			"phoneNumber": contact.phoneNumber,
 			"birthday": contact.birthday,
 			"uid": $rootScope.uid
		};
	};


	$scope.saveNewContact = (contact) => {
		console.log("contact", contact);
		let newContact = createContact(contact);
		ContactsService.postNewContact(contact).then((results) => {
			$location.path("/view");
		}).catch((error) => {
			console.log("error in saveNewContact", error);
		});
	};




});



// 	$scope.clickSubmit = (event) => {
// 		console.log("event", event.target.value);
// 		let newContact = createContact();
// 		ContactsService.postNewContact(newContact).then((results) => {
// 			ContactsService.getAllContacts().then((results) => {
// 				$location.path("/view");
// 		}).catch((error) => {
// 			console.log("error in getAllContacts", error);
// 		};

// 	};
// });


	// $scope.showContacts = (contact) => {
	// 	let newContact = createContact(contact);
	// 	ContactsService.postNewContact(newContact).then(() => {
	// 		$location.path("/view");
	// 	}).catch((error) => {
	// 		console.log("error in showContacts", error);
	// 	});
	// };


