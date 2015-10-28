var app = angular.module("starter4", [])


app.controller("DelController", function ($scope,$http,$window,$httpParamSerializerJQLike) {

    $scope.pageClass = 'deleteuser';
    
    
$scope.deleteuser = function(username) {
   //alert('hie');
var id =localStorage.getItem("user");
      // alert(id);
    
    $http({
    method: 'DELETE',
url : 'https://api.mongolab.com/api/1/databases/studentcorner/collections/Ase_project/'+id+'apiKey=Q_u73BV4oOdMGpnu3WFGmJ8YH_lxHDHO',
   
}).success(function() {
    alert('success');
    
        })
}
    });  

