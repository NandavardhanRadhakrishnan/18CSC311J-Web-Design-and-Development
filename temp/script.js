var myApp = angular.module('myApp',[]);

myApp.controller('myCtrl',function($scope){
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
    // $scope.u = $routeParams.username;
}
);