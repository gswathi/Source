// references
/// <reference path="../Scripts/angular.js" />
/// <reference path="../Scripts/angular-mocks.js" />
/// <reference path="../Scripts/ionic.bundle.js" />
/// <reference path="../Scripts/google.js" />

// system under test
/// <reference path="../www/js/weatherOrNotModule.js" />

describe('apiController', function () {
    var $scope, $controller;

    describe('when initialized', function () {
        beforeEach(function () {
            module('apiApp');
            inject(function ($rootScope, _$controller_) {
                $scope = $rootScope.$new();
                $controller = _$controller_;
            });

            $controller('apiController', { '$scope': $scope });
        });

        it('Charts Shown property to true', function () {
            expect($scope.showCharts).toBe(true);
        });

        it('Speaking Message property to true', function () {
            expect($scope.showSpeakingMessage).toBe(true);
        });

        it('then it defines a getDirection() method', function () {
            expect($scope.imageURL).not.toBe(null);
        });
    });
});