var app = angular.module("myApp", ["ngRoute"]);
app.config(function ($routeProvider) {
	$routeProvider
		.when("/", {
			templateUrl: "main.html"
		})
		.when("/calc", {
			templateUrl: "calculator_page/index.html",
			controller: "calcController",
		})
		.when("/login", {
			templateUrl: "login_page/index.html",
			controller: "loginController"
		});
});

app.controller("calcController", function ($scope) {
	$scope.calculate = function (op) {
		switch (op) {
			case "+":
				$scope.result = parseFloat($scope.num1) + parseFloat($scope.num2);
				break;
			case "-":
				$scope.result = parseFloat($scope.num1) - parseFloat($scope.num2);
				break;
			case "*":
				$scope.result = parseFloat($scope.num1) * parseFloat($scope.num2);
				break;
			case "/":
				$scope.result = parseFloat($scope.num1) / parseFloat($scope.num2);
				break;
		}
	};
});

app.controller('loginController', function ($scope) {

	$scope.submitForm = function () {
		$scope.nameErrorMsg = ""
		$scope.emailErrorMsg = ""
		$scope.passwordErrorMsg = ""
		$scope.successMsg = ""

		if ($scope.name == undefined) {
			$scope.nameErrorMsg = "❌ name is a reuqired field"
		}
		if ($scope.name.length > 8 || $scope.name.length < 3) {
			$scope.nameErrorMsg = "❌ name must be between 3 and 8 charecters"
		}

		if (! /^\S+@\S+\.\S+$/.test($scope.email)) {
			$scope.emailErrorMsg = "❌ username is not a valid email"
		}

		if ($scope.password == undefined) {
			$scope.passwordErrorMsg = "❌ password is a required field"
		}
		if ($scope.password.length > 8 || $scope.password.length < 6) {
			$scope.passwordErrorMsg = "❌ password must be between 6 and 8 charecters"
		}

		else {
			$scope.successMsg = "✅ form validated"
		}

	}
})