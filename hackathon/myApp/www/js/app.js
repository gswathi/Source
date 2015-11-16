// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers','ngCordova'])


.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
   .state('home1', {
      url: '/home1',
      templateUrl: 'templates/home1.html'
      //controller:'CalendarCtrl'  
  })
      .state('listEvents', {
      url: '/listEvents',
      templateUrl: 'templates/listEvents.html',
      controller:'listCtrl' 
     
  })
  .state('home', {
      url: '/home',
      templateUrl: 'templates/home.html',
      controller: 'HomeCtrl'
     
  })
   .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'LoginCtrl'
  })
  .state('register', {
      url: '/register',
      templateUrl: 'templates/register.html',
      controller: 'RegisterCtrl'
  })
  
  .state('calendarevent', {
      url: '/calendarevent',
      templateUrl: 'templates/calendarevent.html',
      controller: 'CalendarCtrl'
      
  })
    .state('profile', {
      url: '/profile',
      templateUrl: 'templates/profile.html',
      controller: 'ProfileCtrl'
      
  })
      .state('update', {
      url: '/update',
      templateUrl: 'templates/update.html',
      controller: 'UpdateCtrl'
      
  })
   .state('event', {
      url: '/event',
      templateUrl: 'templates/event.html',
      controller: 'EventCtrl'
    
  })
    .state('createEvent', {
      url: '/createEvent',
      templateUrl: 'templates/createEvent.html',
      controller: 'CreateEventCtrl'
    
  })
  
   .state('share', {
      url: '/share',
      templateUrl: 'templates/share.html',
      controller:'shareCtrl'
  })
  
  .state('firebase', {
      url: '/firebase',
      templateUrl: 'templates/firebase.html'
     
  })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});
