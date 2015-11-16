function augment(receivingClass, givingClass) {
    // only provide certain methods
    if (arguments[2]) {
        for (var i = 2, len = arguments.length; i < len; i++) {
            receivingClass.prototype[arguments[i]] = givingClass.prototype[arguments[i]];
        }
    }
    // provide all methods
    else {
        for (var methodName in givingClass.prototype) {
            // check to make sure the receiving class doesn't
            // have a method of the same name as the one currently
            // being processed
            if (!Object.hasOwnProperty.call(receivingClass.prototype, methodName)) {
                receivingClass.prototype[methodName] = givingClass.prototype[methodName];
            }

            // Alternatively (check prototype chain as well):
            // if ( !receivingClass.prototype[methodName] ) {
            //      receivingClass.prototype[methodName] = givingClass.prototype[methodName];
            // }
        }
    }
}

var Mixin = function() {}
Mixin.prototype = {
    postMethod: function() {
        console.log("Inside http POST for inserting")
    },
    putMethod: function() {
        console.log("Inside http PUT to udpate");
    },
    deleteMethod: function() {
        console.log("Inside http DELETE to delete");
    },
    getMethod: function() {
        console.log("Inside http GET for retreiving");
    }
};

// A skeleton carAnimator constructor




angular.module('starter.controllers', ['ngSanitize'])
  
    //begin of list controller//

.controller('listCtrl', function($scope, $state, $cordovaCalendar, $http, $window, $httpParamSerializerJQLike) {
     $scope.pageClass = 'logout';
    $scope.logout = function() {
        console.log("logged out!");
        $state.go('login');
    }
    
     $scope.pageClass = 'home';
    $scope.home = function() {
        console.log("home page !");
        $state.go('home');
    }

    $scope.pageClass = 'listEvent';
    $scope.listEvent = function() {
        console.log("inside listEvent function");
        // inside.getMethod();
        $http({
            method: 'GET',
            url: 'https://api.mongolab.com/api/1/databases/aselab/collections//users?apiKey=gCXsqcTt-KNWvpuqEAGIdmkBAN5PhTJq',

            contentType: "application/json"
        }).success(function(response) {
            console.log("inside  function");
            var list = response;
            $scope.myHTML = "";
            for (i = 0; i < list.length; i++) {

                localStorage.setItem("eventname", list[i].eventName);
                localStorage.setItem("userid", list[i]._id.$oid);
                localStorage.setItem("location", list[i].location);
                localStorage.setItem("evenDescription", list[i].eventDescription);
                var eventname = localStorage.getItem("eventname");
                
                var location = localStorage.getItem("location");
                var eventDescription = localStorage.getItem("eventDescription");
                var userid = localStorage.getItem("userid");
                //alert("Login success");
                console.log(eventname);
                console.log(userid);
                // $scope.myHTML =myHTML+eventname;
                $scope.myHTML += eventname + " " + "<br>";

                //$scope.myHTML=eventname;

                // $state.go('test');

            }
        })
    }

})

//end of list controller
//*************************************//

.controller('LoginCtrl', function($scope, $state, $http, $window, $httpParamSerializerJQLike) {

        // $scope.data = {};
       $scope.pageClass = 'home';
    $scope.home = function() {
        console.log("home page !");
        $state.go('home');
    }
        $scope.pageClass = 'login';
        $scope.login = function(username, password) {
            //console.log("inside login function");
            inside.getMethod();
            $http({
                    method: 'GET',
                    url: 'https://api.mongolab.com/api/1/databases/aselab/collections//users?apiKey=gCXsqcTt-KNWvpuqEAGIdmkBAN5PhTJq',

                    contentType: "application/json"
                }).success(function(response) {
                    var list = response;
                    for (i = 0; i < list.length; i++) {
                        if ((list[i].username == username) && (list[i].password == password)) {
                            localStorage.setItem("username", list[i].username);
                            localStorage.setItem("id_user", list[i]._id.$oid);
                            //alert("Login success");
                            //location.href="home.html";
                            console.log("inside if loop");
                            $state.go('home');
                        } else {
                            //alert("Incorrect username/password");
                            console.log("inside else loop");
                            document.getElementById('x').innerHTML = "<P>Invalid Creditials! Please try again....</p>";
                        }
                    }
                })
                //$state.go('firebase');
                //location.href="templates/firebase.html";

        }
    })
    //*************************************//
    //end of login controller

//begin of register controller
.controller('RegisterCtrl', function($scope, $state, $http, $window, $httpParamSerializerJQLike) {
        // $scope.data = {};
       $scope.pageClass = 'home';
    $scope.home = function() {
        console.log("home page !");
        $state.go('home');
    }
        $scope.pageClass = 'register';
        $scope.register = function(username, password, email) {
            // $state.go('home');
            inside.postMethod();
            //console.log("inside register function");
            $http({
                method: 'POST',
                url: 'https://api.mongolab.com/api/1/databases/aselab/collections//users?apiKey=gCXsqcTt-KNWvpuqEAGIdmkBAN5PhTJq',
                data: JSON.stringify({
                    username: username,
                    password: password,
                    email: email
                }),
                contentType: "application/json"
            }).success(function() {
                $scope.username = "";
                $scope.password = "";
                $scope.email = "";
                alert("User created successfully ");
                $state.go('home');
                //$scope.msg ="User created successfully";
                //$window.location.href="index.html";
            })
        }
    })
    //end of register controller

//beginning of home controller
.controller('HomeCtrl', function($scope, $state) {
       $scope.pageClass = 'home';
    $scope.home = function() {
        console.log("home page !");
        $state.go('home');
    }
    $scope.data = {};
    $scope.pageClass = 'calevent';
    $scope.calevent = function() {
        console.log("inside calendar event page");
        $state.go('calendarevent');

    }
    $scope.pageClass = 'logout';
    $scope.logout = function() {
        console.log("logged out!");
        $state.go('login');
    }
    $scope.pageClass = 'events';
    $scope.events = function() {
        console.log("inside events page");
        $state.go('event');
    }
    $scope.pageClass = 'share';
    $scope.share = function() {
        console.log("inside share page");
        $state.go('share');
    }
    $scope.pageClass = 'profile';
    $scope.profile = function() {
        console.log("inside profile page");
        $state.go('profile');
    }

    
    
})

//end of home controller
//begin of profile controller
.controller('ProfileCtrl', function($scope, $state, $http, $window, $httpParamSerializerJQLike) {
       $scope.pageClass = 'home';
    $scope.home = function() {
        console.log("home page !");
        $state.go('home');
    }
        $scope.data = {};
        $scope.pageclass = 'delete';
        $scope.delete = function() {
            var id = localStorage.getItem("id_user");
            inside.deleteMethod();
            //console.log("inside delete");
            $http({
                method: 'DELETE',
                url: 'https://api.mongolab.com/api/1/databases/aselab/collections//users/' + id + '?apiKey=gCXsqcTt-KNWvpuqEAGIdmkBAN5PhTJq',

                contentType: "application/json"
            }).success(function() {
                alert("Delete success!");
                $state.go('login');
            })
        }
        $scope.pageclass = 'update';
        $scope.update = function() {
            console.log("inside update function");
            $state.go('update')
        }
         $scope.pageClass = 'logout';
    $scope.logout = function() {
        console.log("logged out!");
        $state.go('login');
    }

    })
    //end of profile controller
    //begin of update controller
    .controller("UpdateCtrl", function($scope, $state, $http, $window, $httpParamSerializerJQLike) {
   $scope.pageClass = 'home';
    $scope.home = function() {
        console.log("home page !");
        $state.go('home');
    }
        $scope.pageClass = 'update';
        $scope.update = function(username, password, email) {
            inside.putMethod();
            var id = localStorage.getItem("id_user");
            //console.log("inside update function");
            $http({
                method: 'PUT',
                url: 'https://api.mongolab.com/api/1/databases/aselab/collections//users/' + id + '?apiKey=gCXsqcTt-KNWvpuqEAGIdmkBAN5PhTJq',
                data: JSON.stringify({
                    "username": username,
                    "password": password,
                    "email": email
                }),

                contentType: "application/json"


            }).success(function() {
                $scope.username = "";
                $scope.password = "";
                $scope.email = "";
                alert("update successful");
                console.log("navigating to home page from update page");
                $state.go('home');
            })
        }
         $scope.pageClass = 'logout';
    $scope.logout = function() {
        console.log("logged out!");
        $state.go('login');
    }
    })
    //end of update controller

//beginning of event controller

.controller('EventCtrl', function($scope, $state, $cordovaCalendar, $http, $window, $httpParamSerializerJQLike) {
     
    $scope.data = {};
  $scope.pageClass = 'home';
    $scope.home = function() {
        console.log("home page !");
        $state.go('home');
    }
    $scope.create = function() {
        console.log("inside create");
        $state.go('createEvent');

    }
    $scope.list = function() {
        console.log("inside list");
        $state.go('listEvents');

    }
     $scope.pageClass = 'logout';
    $scope.logout = function() {
        console.log("logged out!");
        $state.go('login');
    }

})

//end of event controller

//begin of create new event cotroller
.controller('CreateEventCtrl', function($scope, $state, $cordovaCalendar, $http, $window, $httpParamSerializerJQLike) {
       $scope.pageClass = 'home';
    $scope.home = function() {
        console.log("home page !");
        $state.go('home');
    }
 $scope.pageClass = 'logout';
    $scope.logout = function() {
        console.log("logged out!");
        $state.go('login');
    }
        $scope.createCalendar = function() {
            console.log("inside calendar");
            $cordovaCalendar.createCalendar({
                calendarName: 'Cordova Calendar',
                calendarColor: '#FF0000'
            }).then(function(result) {
                alert("calendar created");
                // success
            }, function(err) {
                // error
            });
        }


        $scope.createEvent = function() {
            console.log("inside create");
            var eventName = localStorage.getItem("eventName");
            var location = localStorage.getItem("location");
            var travelby = localStorage.getItem("travelby");
            var eventDescription = localStorage.getItem("eventDescription");
            var startDate = localStorage.getItem("startDate");
            var endDate = localStorage.getItem("endDate");
            console.log("event1");
            $cordovaCalendar.createEvent({
                title: eventName,
                location: location,
                travelby:travelby,
                notes: eventDescription,
                startDate: startDate,
                endDate: endDate
            }).then(function(result) {
                console.log("Event created successfully");
                alert("event created");
                $state.go('listEvents');
            }, function(err) {
                console.error("There was an error: " + err);
            });
        }


        //

        $scope.pageClass = 'createNewEvent';
        $scope.createNewEvent = function(eventName, location, travelby, eventDescription, startDate, endDate) {
            // $state.go('home');
            console.log("inside create event function");
            $http({
                method: 'POST',
                url: 'https://api.mongolab.com/api/1/databases/aselab/collections//users?apiKey=gCXsqcTt-KNWvpuqEAGIdmkBAN5PhTJq',
                data: JSON.stringify({
                    eventName: eventName,
                    location: location,
                    travelby: travelby,
                    eventDescription: eventDescription,
                    startDate: startDate,
                    endDate: endDate
                }),
                contentType: "application/json"
            }).success(function() {
                $scope.eventName = "";
                $scope.location = "";
                $scope.travelby = "";
                $scope.eventDescription = "";
                $scope.startDate = "";
                $scope.endDate = "";
                $scope.access(eventName);
                console.log("access");
                alert("Event created successfully ");
                //$state.go('tests');
                //$scope.msg ="User created successfully";
                //$window.location.href="index.html";
            })
        }

        //
        $scope.pageClass = 'access';
        $scope.access = function(eventName) {
                //console.log("inside login function");
                //inside.getMethod();
                $http({
                    method: 'GET',
                    url: 'https://api.mongolab.com/api/1/databases/aselab/collections//users?apiKey=gCXsqcTt-KNWvpuqEAGIdmkBAN5PhTJq',

                    contentType: "application/json"
                }).success(function(response) {
                    var list = response;
                    for (i = 0; i < list.length; i++) {
                        if ((list[i].eventName == eventName)) {
                            localStorage.setItem("eventName", list[i].eventName);
                            localStorage.setItem("location", list[i].location);
                            localStorage.setItem("travelby", list[i].travelby);
                            localStorage.setItem("eventDescription", list[i].eventDescription);
                            localStorage.setItem("startDate", list[i].startDate);
                            localStorage.setItem("endDate", list[i].endDate);
                            localStorage.setItem("user_id", list[i]._id.$oid);
                            //alert("Login success");
                            //location.href="home.html";
                            $scope.createEvent();
                            console.log("inside if loop");
                            // $state.go('home');
                        } else {
                            //alert("Incorrect username/password");
                            console.log("inside else loop");
                            //document.getElementById('x').innerHTML="<P>Invalid Creditials! Please try again....</p>";
                        }
                    }
                })

            }
        $scope.pageClass = 'list';
        $scope.list = function() {
            console.log("inside list page");
            //$scope.listEvent();
            $state.go('listEvents');
        }

    })
    //end of create new event controller





