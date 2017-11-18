"use strict";

app.service("ContactsService", function($http, $q, FIREBASE_CONFIG){
	const getAllContacts = (userUid) => {
		let contacts = [];
		return $q((resolve, reject) => {
			$http.get(`${FIREBASE_CONFIG.databaseURL}/contacts.json?orderBy="uid"&equalTo="${userUid}"`).then((results) => {
				let fbContacts = results.data;
				console.log("results", results);
				Object.keys(fbContacts).forEach((key) => {
					fbContacts[key].id = key;
					contacts.push(fbContacts[key]);
					resolve(contacts);
					console.log("in getter", contacts);
				});
			}).catch((error) => {
				reject(error);
			});
		});
	};


	const postNewContact = (newContact) => {
		return $http.post(`${FIREBASE_CONFIG.databaseURL}/contacts.json`, JSON.stringify(newContact));
	};







	return {getAllContacts, postNewContact};
});





