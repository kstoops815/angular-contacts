"use strict";

app.service("ContactsService", function($http, $q, $rootScope, FIREBASE_CONFIG){
	const getAllContacts = (userUid) => {
		let contacts = [];
		return $q((resolve, reject) => {
			$http.get(`${FIREBASE_CONFIG.databaseURL}/contacts.json?orderBy="uid"&equalTo="${userUid}"`).then((results) => {
				let fbContacts = results.data;
				Object.keys(fbContacts).forEach((key) => {
					fbContacts[key].id = key;
					contacts.push(fbContacts[key]);
				});
				resolve(contacts);
			}).catch((error) => {
				reject(error);
			});
		});
	};

	const createContactObject = (contact) => {
		return {
			"firstName": contact.firstName,
			"middleName": contact.middleName,
 			"lastName": contact.lastName,
 			"nickName": contact.nickName,
 			"address": contact.address,
 			"phoneNumber": contact.phoneNumber,
			 "birthday": contact.birthday,
			 "isFavorite": contact.isFavorite,
 			"uid": $rootScope.uid
		};
	};




	const postNewContact = (newContact) => {
		return $http.post(`${FIREBASE_CONFIG.databaseURL}/contacts.json`, JSON.stringify(newContact));
	};


	const deleteContact = (contactId) => {
		return $http.delete(`${FIREBASE_CONFIG.databaseURL}/contacts/${contactId}.json`);
	};

	const updateContact = (contact, contactId) => {
		return $http.put(`${FIREBASE_CONFIG.databaseURL}/contacts/${contactId}.json`, JSON.stringify(contact));
	};




	return {getAllContacts, postNewContact, deleteContact, updateContact, createContactObject};
});





