angular.module("bear", []);

angular.module("bear").controller("polarbearcontroller", ["$scope", "$timeout", function($scope, $timeout){
	$scope.justtext=true;
	$scope.justinput=false;
	$scope.message = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    

	$scope.Texty = function () {
		$scope.justtext = false;
		$scope.justinput = true;
		$timeout( function() {document.getElementById("foc").focus();
		},0);
	}

	
	 $scope.Update = function () {
		
		$scope.justtext = true;
		$scope.justinput = false;
	 }


}]
);