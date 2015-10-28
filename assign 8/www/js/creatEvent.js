var app = angular.module("starter3", [])


app.controller("eventController", function ($scope,$http,$window,$httpParamSerializerJQLike) {

    $scope.pageClass = 'create';
$scope.create = function(eventtype,eventname,fromDate,to,eventDescription,reminddate,remindtime) {
   console.log("inside event function");
$http({
    method: 'POST',
    url : 'https://api.mongolab.com/api/1/databases/studentcorner/collections//Ase_project?apiKey=Q_u73BV4oOdMGpnu3WFGmJ8YH_lxHDHO',
    data: JSON.stringify({
                eventtype:eventtype,
                eventname:eventname,
                fromDate: fromDate,
                to:to,
                eventDescription:eventDescription,
                reminddate:reminddate,
                remindtime:remindtime
                
            
                
            }),
    contentType: "application/json"
}).success(function() {
    $scope.eventtype ="";
    $scope.eventname ="";
    $scope.fromDate ="";
     $scope.to ="";
    $scope.eventDescription ="";
    $scope.reminddate ="";
    $scope.remindtime ="";
    $scope.msg ="Event created successfully";
    $window.location.href="home.html";
        })
}


/*
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
}*/




    }); 