"use strict";

app.controller("AuthCtrl", function($location, $rootScope, $scope, AuthService){
	$scope.authenticate = () => {
		AuthService.authenticateGoogle().then((result) => {
			$rootScope.uid = result.user.uid;
			$scope.$apply(() => {
				$location.url("/contacts/view");
			});			
		}).catch((error) => {
			console.log("error in authenticateGoogle", error);
		});
	};
});