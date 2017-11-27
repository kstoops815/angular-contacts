"use strict";

app.controller("ContactDetailCtrl", function($routeParams, $scope, ContactsService) {
	$scope.contact = {};

  const getContact = () => {
    ContactsService.getSingleContact($routeParams.id).then((results) => {
			$scope.contact = results.data;
    }).catch((error) => {
      console.log("error in getSingleMovie", error);
    });
  };

  getContact();
	
});