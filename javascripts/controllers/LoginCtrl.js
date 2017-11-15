"use strict";

app.controller("LoginCtrl", function($location, $rootScope, $scope, LoginService){
	$scope.authenticate = () => {
		LoginService.authenticateGoogle().then((result) => {
			$rootScope.uid = result.user.uid;
			console.log("$rootScope", $rootScope.uid);
			$scope.$apply(() => {
				$location.url("/search");
			});			
		}).catch((error) => {
			console.log("error in authenticateGoogle", error);
		});
	};
});