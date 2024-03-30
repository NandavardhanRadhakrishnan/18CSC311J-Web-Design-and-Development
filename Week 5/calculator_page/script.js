var app = angular.module("myApp", []);
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
