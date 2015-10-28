var app = angular.module("starter", [])


app.controller("RegisterController", function ($scope,$http,$window,$httpParamSerializerJQLike) {

    $scope.pageClass = 'register';
$scope.register = function(username,password,email) {
   console.log("inside register function");
$http({
    method: 'POST',
    url : 'https://api.mongolab.com/api/1/databases/studentcorner/collections//Ase_project?apiKey=Q_u73BV4oOdMGpnu3WFGmJ8YH_lxHDHO',
    data: JSON.stringify({
                username:username,
                password: password,
                email:email
            
                
            }),
    contentType: "application/json"
}).success(function() {
    $scope.username ="";
    $scope.password ="";
     $scope.email ="";
    
    $scope.msg ="User created successfully";
    $window.location.href="home.html";
        })
}



$scope.pageClass = 'deleteuser';
    
    
$scope.deleteuser = function(username) {
   //alert('hie');
var id =localStorage.getItem("username");
      // alert(id);
    
    $http({
    method: 'DELETE',
url : 'https://api.mongolab.com/api/1/databases/studentcorner/collections/Ase_project/'+id+'apiKey=Q_u73BV4oOdMGpnu3WFGmJ8YH_lxHDHO',
   
}).success(function() {
    alert('success');
    
        })
}


    });  