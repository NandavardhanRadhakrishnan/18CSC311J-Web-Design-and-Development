myApp = angular.module('myApp',["ngRoute"]);

myApp.config(function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl: "index.html",
        controller: "chatController"
    })
    .when('/login',{
        templateUrl: "login.html",
        controller: "loginCtrl"
    })
    .when('/register',{
        templateUrl: "register.html",
        controller: "registerCtrl"
    })
    .when('/chat',{
        templateUrl: "chat.html",
        controller: "chatCtrl"
    })
    .otherwise({
        redirectTo: '/'
    });
});
myApp.controller('chatCtrl',function($scope,$routeParams){
    $scope.users=[
        {name:"User 1",avatar:"https://source.unsplash.com/random/200x200?sig=1"},
    ];
    for(var i=2;i<21;i++){
        $scope.users.push({name:`User ${i}`,avatar:`https://source.unsplash.com/random/200x200?sig=${i}`});
    };
    $scope.messages = [
        {text:"hello a",from:"user",direction:"user-msg"},
        {text:"hello b",from:"us",direction:"recipent-msg"},
    ];
    $scope.curr = ''
    $scope.changeUser = function(userName) {
        $scope.curr = '';
        $scope.messages.push({text:userName,from:"user",direction:"user-msg"});
    };
    $scope.u = $routeParams.username;
});

myApp.controller('loginCtrl', function($scope, $http, $window) {
    $scope.error = '';

    $scope.login = function() {
        $http.post('/api/login', { username: $scope.username, password: $scope.password })
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

myApp.controller('registerCtrl', function($scope, $http) {
    $scope.error = '';

    $scope.register = function() {
        $http.post('/api/register', { username: $scope.username, password: $scope.password })
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