var app = angular.module("myapp", []);
app.controller("myctrl", function ($scope) {
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
