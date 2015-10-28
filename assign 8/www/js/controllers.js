angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'My Profile', id: 1 },
    { title: 'Events', id: 2 },
    { title: 'Notify', id: 3 },
    { title: 'My Files', id: 4 }
  ];
})


.controller('shareCtrl',['$scope',function($scope) {
   $scope.whatsappShare=function(){
    window.plugins.socialsharing.shareViaWhatsApp('StudentCorner', null /* img */, "https://play.google.com/store/apps/details?id=com.studentcorner.sk559486" /* url */, null, function(errormsg){alert("Error: Cannot Share")});
  }
   $scope.twitterShare=function(){
    window.plugins.socialsharing.shareViaTwitter('StudentCorner', null /* img */, 'https://play.google.com/store/apps/details?id=com.studentcorner.sk559486', null, function(errormsg){alert("Error: Cannot Share")});
  }
   $scope.facebookShare=function(){
     window.plugins.socialsharing.shareViaFacebook('StudentCorner', null /* img */, 'https://play.google.com/store/apps/details?id=609841255825076', null, function(errormsg){alert("Error: Cannot Share")});
  }
   $scope.OtherShare=function(){
     window.plugins.socialsharing.share('StudentCorner', null, null, 'https://play.google.com/store/apps/details?id=com.studentcorner.sk559486');
  }
 
}])
.controller('PlaylistCtrl', function($scope, $stateParams) {
});
