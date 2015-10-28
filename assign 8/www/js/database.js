var app = angular.module("starter1", [])


app.controller("LoginController", function ($scope,$http,$window,$httpParamSerializerJQLike) {

    $scope.pageClass = 'login';
$scope.login = function(username, password) {
   console.log("inside login function");
$http({
    method: 'GET',
    url : 'https://api.mongolab.com/api/1/databases/studentcorner/collections//Ase_project?apiKey=Q_u73BV4oOdMGpnu3WFGmJ8YH_lxHDHO',
   
    contentType: "application/json"
}).success(function(response) {
     var list=response;
    for(i=0;i<list.length;i++){
         if((list[i].username==$scope.username) && (list[i].password==$scope.password))
        {
           //localStorage.setItem("username",obj[i].username);
            location.href="home.html";
        }
   else {
                       $scope.errormsg = "Invalid credentials"
                       $state.go("firebase");
                    }
    }
        })
} 
$scope.pageClass = 'deleteuser';
    
    
$scope.deleteuser = function(username) {
   //alert('hie');
var id =localStorage.getItem("username");
       alert(id);
    
    $http({
    method: 'DELETE',
url : 'https://api.mongolab.com/api/1/databases/studentcorner/collections/Ase_project/'+id+'apiKey=Q_u73BV4oOdMGpnu3WFGmJ8YH_lxHDHO',
   
}).success(function() {
    alert('success');
    
        })
}



    
});  