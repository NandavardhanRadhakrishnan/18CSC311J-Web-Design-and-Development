angular.module('registerApp', [])
.controller('registerCtrl', function($scope, $http) {
    $scope.error = '';

    $scope.register = function() {
        $http.post('http://localhost:3000/api/register', { username: $scope.username, password: $scope.password })
            .then(function(response) {
                // Successful registration
                // alert(response.data.message);
                $window.location.href = '/chat?username=' + $scope.username;
                // Redirect to another page or perform any other action after successful registration
            })
            .catch(function(error) {
                // Failed registration
                $scope.error = error.data.error;
            });
    };
});