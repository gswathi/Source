var ionicApp = angular.module('starter5', ['ionic', 'ngCordova']);
 
ionicApp.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        if(window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if(window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
});
 
ionicApp.controller("CalendarController", function($scope, $cordovaCalendar) {
 
    $scope.createEvent = function() {
        $cordovaCalendar.createEvent({
            title: 'Space Race',
            location: 'The Moon',
            notes: 'Bring sandwiches',
            startDate: new Date(2015, 0, 15, 18, 30, 0, 0, 0),
            endDate: new Date(2015, 1, 17, 12, 0, 0, 0, 0)
        }).then(function (result) {
            console.log("Event created successfully");
        }, function (err) {
            console.error("There was an error: " + err);
        });
    }
 
});