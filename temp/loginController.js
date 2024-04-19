angular.module('loginApp', [])
.controller('loginCtrl', function($scope, $http, $window) {
    $scope.error = '';

    $scope.login = function() {
        $http.post('http://localhost:3000/api/login', { username: $scope.username, password: $scope.password })
            .then(function(response) {
                // Successful login
                alert(response.data.message);
                $window.location.href = '/chat?username=' + $scope.username;
                // Redirect to another page or perform any other action after successful login
            })
            .catch(function(error) {
                // Failed login
                $scope.error = error.data.error;
            });
    };
});